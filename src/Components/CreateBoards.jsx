import React, { Component } from 'react';
import { doHttpPost, extractFormData } from '../util.js'

class CreateBoards extends Component {
    
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        
        doHttpPost('/board', extractFormData(this.inputRef), this.props.getSessionId())
            .then(board => {
                console.log(JSON.stringify(board))
                window.location.replace('/')
            })
    }

    render() {
        return (
            <div>
                <h1>Create a Board</h1>
                <div className="card bg-light mb-3 account">
                    <div className="card-header">New Board</div>
                    <div className="card-body">
                        <form ref={this.inputRef} onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="boardName">Board Name: </label></div>
                                <div className="col-sm-8"><input name="boardName" className="input-group" type="text" placeholder="Board Name" required="required" /></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="description">Description: </label></div>
                                <div className="col-sm-8"><textarea name="description" className="input-group" type="text" placeholder="Description" required="required"/></div>
                            </div>
                            <button type="submit" className="btn btn-primary">Create Board</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default CreateBoards;