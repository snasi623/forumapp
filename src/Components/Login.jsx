import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import baseUrl from './ApiPath';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        const setSessionId = this.props.setSessionId
        e.preventDefault();
        const formData = new FormData(this.inputRef.current)
        let entryData = {}
        for (var [key, value] of formData.entries()) { 
            entryData[key] = value
        }
        axios.post(`${baseUrl}/user/login`, entryData)
            .then(res => {
                const loginResponse = res.data;
                console.log(JSON.stringify(loginResponse))
                setSessionId(loginResponse.sessionId)
                this.props.getMe(loginResponse.sessionId).then(me => console.log(me))
            })
    }
    
    render() {
        return (
            <div>
                <h1>Forum App</h1>
                <div className="card bg-light mb-3 account">
                    <div className="card-header">Log In</div>
                    <div className="card-body">
                        <form ref={this.inputRef} onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="email">Email: </label></div>
                                <div className="col-sm-8"><input name="email" className="input-group" type="email" placeholder="Email" id="email" required="required" /></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="password">Password: </label></div>
                                <div className="col-sm-8"><input name="password" className="input-group" type="password" placeholder="Password" id="password" required="required" /></div>
                            </div>
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </form>
                        <p>New to the site? <Link to="/createaccount">Create an account here.</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;