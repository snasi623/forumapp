import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import baseUrl from './ApiPath';

class CreateTopics extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let { boardId } = this.props.match.params;
        const formData = new FormData(this.inputRef.current)
        let entryData = {}
        for (var [key, value] of formData.entries()) { 
            entryData[key] = value
        }
        entryData.boardId = boardId;
        axios.post(`${baseUrl}/topic`, entryData, {
            headers: {
                'X-Forum-Session-Id': this.props.getToken()
            }
        }).then(res => {
            const topic = res.data;
            console.log(JSON.stringify(topic))
        })
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

export function withRouter(Children) {
    return(props) => {
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
}

export default withRouter(CreateTopics);
