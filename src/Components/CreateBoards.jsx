import React, { Component } from 'react';
import axios from 'axios';

class CreateBoards extends Component {

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
        })
    }

    onSubmit() {
        //pass value in inputs to API
        //redirect to the Home page
        event.preventDefault();
        axios.post(`http://localhost:3001/board`)
        .then(res => {
            
        })

    }

    render() {
        return (
            <div className="card bg-light mb-3 account">
                <div className="card-header">Create Board</div>
                <div className="card-body">
                    <form action="submit">
                        <div className="row">
                            <div className="col-sm-4"><label htmlFor="boardName">Board Name: </label></div>
                            <div className="col-sm-8"><input className="input-group" type="boardname" placeholder="Board Name" id="boardName" required="required" /></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4"><label htmlFor="description">Description: </label></div>
                            <div className="col-sm-8"><textarea className="input-group" type="text" placeholder="Description" id="description" required="required"/></div>
                        </div>
                        <button type="submit" className="btn btn-primary">Create Board</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateBoards;