//Responses + Original message of the thread
import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/post`)
        .then(res => {
            const posts = res.data;
            this.setState({ posts });
            console.log(posts[0].text);
        })
    }
    
    render() {
        const posts = [];
        this.state.posts.forEach(post => 
            posts.push(
                <div className="card bg-light thread">
                    <div className="card-header" key={post.id}><strong>{post.userId} </strong>{post.postdate}</div>
                    <div className="card-body">{post.text}</div>
                </div>            
            )
        );

        return (
            <div>
                <h1>Posts</h1>
                {posts}
                <div className="card bg-light mb-3 account">
                    <div className="card-header">Reply</div>
                    <div className="card-body">
                        <form action="submit">
                            <div><textarea className="input-group" type="text" placeholder="Text" id="text" /></div>
                            <button type="submit" className="btn btn-primary">Reply</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts;