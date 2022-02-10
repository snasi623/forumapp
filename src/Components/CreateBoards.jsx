import React, { Component } from 'react';
import axios from 'axios';

class CreateBoards extends Component {
    render() {
        return (
            <div className="card bg-light mb-3 account">
                <div className="card-header">Create Board</div>
                <div className="card-body">
                    <form action="submit">
                        <div className="row">
                            <div className="col-sm-4"><label htmlFor="boardname">Board Name: </label></div>
                            <div className="col-sm-8"><input className="input-group" type="boardname" placeholder="Board Name" id="boardname" /></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4"><label htmlFor="description">Description: </label></div>
                            <div className="col-sm-8"><textarea className="input-group" type="text" placeholder="Description" id="description" /></div>
                        </div>
                        <button type="submit" className="btn btn-primary">Create Board</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateBoards;