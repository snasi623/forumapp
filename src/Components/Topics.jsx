import React, { Component } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import baseUrl from './ApiPath';

class Topics extends Component {

    state = {
        board: {},
        topics: []
    }

    componentDidMount() {
        let { boardId } = this.props.match.params;
        console.log(boardId);

        axios.get(`${baseUrl}/board/${boardId}`)
            .then(res => {
                const board = res.data;
                this.setState({ board });
                console.log(board);
            })
        
        axios.get(`${baseUrl}/topic/byBoardId/${boardId}`)
            .then(res => {
                const topics = res.data;
                this.setState({ topics: topics });
                console.log(topics[0]?.threadName);
            })
    }
    
    render() {
        const topics = [];
        this.state.topics.forEach(topic => 
            topics.push(
                <div className="card-body" key={topic.id}><Link to={`/posts/${topic.id}`}>{topic.threadName}</Link></div>
            )
        );

        return (
            <div>
                <h1>{this.state.board.boardName}</h1>
                <p>{this.state.board.description}</p>
                <div className="card bg-light mb-3">
                    <div className="card-header">Topics</div>
                    {topics}
                </div>
                <p>Have a topic that you want to post about? <Link to={`/createtopics/${this.state.board.id}`}>Create a thread here!</Link></p>
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

export default withRouter(Topics);
