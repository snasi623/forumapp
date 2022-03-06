import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { doHttpPost, extractFormData } from '../util.js'

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        
        doHttpPost('/user/login', extractFormData(this.inputRef))
            .then(loginResponse => {
                this.props.setSessionId(loginResponse.sessionId)
                window.location.replace('/')
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