import React, { Component } from 'react';
import axios from 'axios';

class CreateTopics extends Component {
    render() {
        return (
            <div className="card bg-light mb-3 account">
                <div className="card-header">Create Topic</div>
                <div className="card-body">
                    <form action="submit">
                        <div className="row">
                            <div className="col-sm-4"><label htmlFor="topicname">Topic Name: </label></div>
                            <div className="col-sm-8"><input className="input-group" type="topicname" placeholder="Topic Name" id="topicname" /></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4"><label htmlFor="text">Text: </label></div>
                            <div className="col-sm-8"><textarea className="input-group" type="text" placeholder="Text" id="text" /></div>
                        </div>
                        <button type="submit" className="btn btn-primary">Create Thread</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateTopics;