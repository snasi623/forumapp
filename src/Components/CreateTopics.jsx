import React, { Component } from 'react';
import { doHttpPost, extractFormData, withRouter } from '../util.js'

class CreateTopics extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let { boardId } = this.props.match.params;
        let entryData = extractFormData(this.inputRef);
        entryData.boardId = boardId;

        doHttpPost('/topic', entryData, this.props.getSessionId())
            .then(() => window.location.replace(`/topics/${boardId}`))
    }
    
    render() {
        return (
            <div>
                <h1>Create a Thread</h1>
                <div className="card bg-light mb-3 account">
                    <div className="card-header">New Topic</div>
                    <div className="card-body">
                        <form ref={this.inputRef} onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="topicname">Topic Name: </label></div>
                                <div className="col-sm-8"><input name="threadName" className="input-group" type="text" placeholder="Topic Name" id="topicname" required="required" /></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="text">Text: </label></div>
                                <div className="col-sm-8"><textarea name="firstPost" className="input-group" type="text" placeholder="Text" id="text" required="required" /></div>
                            </div>
                            <button type="submit" className="btn btn-primary">Create Thread</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CreateTopics);