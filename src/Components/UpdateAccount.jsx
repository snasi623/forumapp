import React, { Component } from 'react';
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

    componentDidMount() {
        this.props.getMe(this.props.getSessionId()).then(user => this.setState({ user }));
    }

    onSubmit(e) {
        e.preventDefault();
        doHttpPut('/user/me', extractFormData(this.inputRef), this.props.getSessionId())
            .then(() => window.location.replace('/'))
    }

    render() {
        return (
            <div>
                <h1>Edit Your Account</h1>
                <div className="card bg-light mb-3 account">
                    <div className="card-header">Account Information</div>
                    <div className="card-body">
                        <form ref={this.inputRef} onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="username">New Username: </label></div>
                                <div className="col-sm-8"><input name="username" className="input-group" type="text" placeholder="New Username" id="username" required="required" /></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="password">New Password: </label></div>
                                <div className="col-sm-8"><input name="password" className="input-group" type="password" placeholder="New Password" id="password" required="required" /></div>
                            </div>
                            <button type="submit" className="btn btn-primary">Update Information</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateAccount;