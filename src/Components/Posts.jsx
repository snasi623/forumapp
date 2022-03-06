import React, { Component } from 'react';
import { formatTime, doHttpGet, doHttpDelete, doHttpPost, extractFormData, withRouter } from '../util.js'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.renderDelete = this.renderDelete.bind(this);
    }

    state = {
        posts: [],
        topic: {},
        userId: null
    }

    componentDidMount() {
        let { topicId } = this.props.match.params;
        console.log(topicId);

        doHttpGet(`/topic/${topicId}`)
            .then(topic => this.setState({ topic }));

        doHttpGet(`/post/byTopicId/${topicId}`)
            .then(posts => this.setState({ posts }));

        this.props.getMe(this.props.getSessionId())
            .then(me => this.setState({ userId: me.id }))
    }

    deletePost(post) {
        doHttpDelete(`/post/${post.id}`, this.props.getSessionId())
            .then(() => {
                this.setState({ status: 'Delete successful' })
                window.location.reload();
            });
    }

    onSubmit(e) {
        e.preventDefault();

        let { topicId } = this.props.match.params;
        let entryData = extractFormData(this.inputRef);
        entryData.topicId = topicId;

        doHttpPost('/post', entryData, this.props.getSessionId())
            .then(() => window.location.reload());
    }

    renderDelete(post) {
        if (post.userId === this.state.userId) {
            return (
                <button type="submit" onClick={() => this.deletePost(post)} className="btn btn-danger">Delete</button>
            )
        }
    }
    
    render() {
        const posts = [];
        this.state.posts.forEach(post => 
            posts.push(
                <div className="card bg-light thread">
                    <div className="card-header" key={post.id}>Posted on: {formatTime(post.postDate)} by <strong>{post.createdByUsername ?? "Unknown"}</strong></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-11">{post.text}</div>
                            <div className="col-sm-1">{this.renderDelete(post)}</div>
                        </div>
                    </div>
                </div>
            )
        );

        return (
            <div>
                <h1>{this.state.topic.threadName}</h1>
                <div className="card bg-light thread">
                    <div className="card-header">Created on: {formatTime(this.state.topic.createdDate)} by <strong>{this.state.topic.createdByUsername}</strong></div>
                    <div className="card-body">{this.state.topic.firstPost}</div>
                </div>
                {posts}
                <div className="card bg-light mb-3 account">
                    <div className="card-header">Reply</div>
                    <div className="card-body">
                        <form ref={this.inputRef} onSubmit={this.onSubmit}>
                            <div><textarea name="text" className="input-group" type="text" placeholder="Text" id="text" /></div>
                            <button type="submit" className="btn btn-primary">Reply</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Posts);
