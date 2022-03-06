import React, { Component } from 'react';
import axios from 'axios';
import baseUrl from './ApiPath';
import { doHttpPut, extractFormData } from '../util';

class UpdateAccount extends Component {
    
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        user: []
    }

    getMe = this.props.getMe

    componentDidMount() {
        axios.get(`${baseUrl}/user/me`)
            .then(res => {
                const user = res.data;
                this.props.getMe(user.sessionId)
                this.setState({ user });
            })
    }

    onSubmit(e) {
        e.preventDefault();
        doHttpPut(`/user/me`, extractFormData(this.inputRef))
            .then(() => {
                console.log('test who fucking cares')
            })
    }
    
    render() {
        const user = [];

        return (
            <div>
                <h1>Edit Your Account</h1>
                <div className="card bg-light mb-3 account">
                    <div className="card-header">Account Information</div>
                    <div className="card-body">
                        <form ref={this.inputRef} onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="username">New Username: </label></div>
                                <div className="col-sm-8"><input name="username" className="input-group" type="text" placeholder={user.username} id="username" required="required" /></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="password">New Password: </label></div>
                                <div className="col-sm-8"><input name="password" className="input-group" type="password" placeholder="New Password" id="password" required="required" /></div>
                            </div>
                            <button type="submit" className="btn btn-primary">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateAccount;