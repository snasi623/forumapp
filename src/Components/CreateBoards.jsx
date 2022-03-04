import React, { Component } from 'react';
import axios from 'axios';
import baseUrl from './ApiPath';

class CreateBoards extends Component {
    
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(this.inputRef.current)
        let entryData = {}
        for (var [key, value] of formData.entries()) { 
            entryData[key] = value
        }
        axios.post(`${baseUrl}/board`, entryData, {
            headers: {
                'X-Forum-Session-Id': this.props.getSessionId()
            }
        }).then(res => {
            const board = res.data;
            console.log(JSON.stringify(board))
        })
    }

    render() {
        return (
            <div className="card bg-light mb-3 account">
                <div className="card-header">Create Board</div>
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
        )
    }
}

export default CreateBoards;