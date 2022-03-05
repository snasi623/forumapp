import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import baseUrl from './ApiPath';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
        this.deletePost = this.deletePost.bind(this)
    }

    state = {
        posts: [],
        topic: {}
    }

    componentDidMount() {
        let { topicId } = this.props.match.params;
        console.log(topicId);

        axios.get(`${baseUrl}/topic/${topicId}`)
            .then(res => {
                const topic = res.data;
                this.setState({ topic });
                console.log(topic);
            })

        axios.get(`${baseUrl}/post/byTopicId/${topicId}`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
                console.log(posts[0]?.text);
            })
    }

    deletePost() {
        axios.delete(`${baseUrl}/post`)
            .then(() => this.setState({ status: 'Delete successful' }));
    }

    onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(this.inputRef.current)
        let entryData = {}
        for (var [key, value] of formData.entries()) { 
            entryData[key] = value
        }
        let { topicId } = this.props.match.params;
        entryData.topicId = topicId
        axios.post(`${baseUrl}/post`, entryData, {
            headers: {
                'X-Forum-Session-Id': this.props.getSessionId()
            }
        }).then(res => {
            const post = res.data;
            console.log(JSON.stringify(post))
        })
    }
    
    render() {
        const posts = [];
        this.state.posts.forEach(post => 
            posts.push(
                <div className="card bg-light thread">
                    <div className="card-header" key={post.id}><strong>{post.userId} </strong>{post.postDate}</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-11">{post.text}</div>
                            <div className="col-sm-1"><button type="submit" className="btn btn-danger">Delete</button></div>
                        </div>
                    </div>
                </div>
            )
        );

        return (
            <div>
                <h1>{this.state.topic.threadName}</h1>
                <div className="card bg-light thread">
                    <div className="card-header"><strong>{this.state.topic.userId}</strong>{this.state.topic.createdDate}</div>
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

export function withRouter(Children) {
    return(props) => {
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
}

export default withRouter(Posts);
