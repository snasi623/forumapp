import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { doHttpGet } from '../util.js'

class Boards extends Component {    
    constructor(props) {
        super(props);
        this.displayCreateBoardLink = this.displayCreateBoardLink(this);
    }
    
    state = {
        boards: []
    }

    componentDidMount() {
        doHttpGet('/board')
            .then(boards => this.setState({ boards }));
    }

    displayCreateBoardLink() {
        if (this.props.getSessionId() != null) {
            return (
                <p>If you are not finding what you are looking for, <Link to="/createboards">Create a Board here!</Link></p>
            )
        } else {
            return ''
        }
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
                <h1>Baxter Boards</h1>
                <p>Your one stop shop for all of your petcare needs. Baxter Boards houses solutions for your pet across all their needs and is operated by users like you.</p>
                {this.displayCreateBoardLink}
                {boards}
            </div>
        )
    }
}

export default Boards;