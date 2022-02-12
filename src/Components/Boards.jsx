//Where you list the names of the subreddits

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Boards extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        boards: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/board`)
        .then(res => {
            const boards = res.data;
            this.setState({ boards });
            console.log(boards[0].boardname);
        })
    }

    render() {
        const boards = [];
        this.state.boards.forEach(board => 
            boards.push(
                <div className="card bg-light mb-3" key={board.id}>
                    <div className="card-header">{board.boardname}</div>
                    <div className="card-body">{board.description}</div>
                </div>
            )
        );

        return (
            <div>
                <h1>Boards</h1>
                {boards}
                <Link to="/createboards">Create Boards</Link>
            </div>
        )
    }
}

export default Boards;