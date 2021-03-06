import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { doHttpGet, withRouter } from '../util.js'

class Topics extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        board: {},
        boardId: null,
        topics: []
    }

    componentDidMount() {
        let { boardId } = this.props.match.params;
        this.setState({ boardId });
        console.log(boardId);

        doHttpGet(`/board/${boardId}`)
            .then(board => this.setState({ board }));
        
        doHttpGet(`/topic/byBoardId/${boardId}`)
            .then(topics => this.setState({ topics }))
    }
    
    render() {
        const topics = [];
        this.state.topics.forEach(topic => 
            topics.push(
                <div className="card-body" key={topic.id}><Link to={`/posts/${topic.id}`}>{topic.threadName}</Link> by {topic.createdByUsername ?? "Unknown"}</div>
            )
        );

        return (
            <div>
                <h1>{this.state.board.boardName}</h1>
                <p>{this.state.board.description}</p>
                <p>Have a topic that you want to post about? <Link to={`/createtopics/${this.state.boardId}`}>Create a thread here!</Link></p>
                <div className="card bg-light mb-3">
                    <div className="card-header">Topics</div>
                    {topics}
                </div>
            </div>
        )
    }
}

export default withRouter(Topics);
