import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { doHttpGet } from '../util.js'

class Boards extends Component {    
    state = {
        boards: []
    }

    componentDidMount() {
        doHttpGet(`/board`)
            .then(boards => this.setState({ boards }));
    }

    render() {
        const boards = [];
        this.state.boards.forEach(board => 
            boards.push(
                <div className="card bg-light mb-3" key={board.id}>
                    <div className="card-header"><Link to={`/topics/${board.id}`}>{board.boardName}</Link></div>
                    <div className="card-body">{board.description}</div>
                </div>
            )
        );

        return (
            <div>
                <h1>Boards</h1>
                <p>Not finding what you are looking for? <Link to="/createboards">Create a Board here!</Link></p>
                {boards}
            </div>
        )
    }
}

export default Boards;