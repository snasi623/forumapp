import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import baseUrl from './ApiPath';

class Boards extends Component {
    state = {
        boards: []
    }

    componentDidMount() {
        axios.get(`${baseUrl}/board`)
            .then(res => {
                const boards = res.data;
                this.setState({ boards });
            })
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
                {boards}
                <p>Not finding what you are looking for? <Link to="/createboards">Create a Board here!</Link></p>
            </div>
        )
    }
}

export default Boards;