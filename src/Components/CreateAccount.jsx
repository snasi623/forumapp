import React, { Component } from 'react';
import { doHttpPost, extractFormData } from '../util.js'

class CreateAccount extends Component {
    
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        
        doHttpPost('/user', extractFormData(this.inputRef))
            .then(() => window.location.replace('/login'))
    }
    
    render() {
        return (
            <div>
                <div className="card bg-light mb-3 account">
                    <div className="card-header">Create Account</div>
                    <div className="card-body">
                        <form ref={this.inputRef} onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="email">Email: </label></div>
                                <div className="col-sm-8"><input name="email" className="input-group" type="email" placeholder="Email" id="email" required="required" maxLength="100" /></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="username">Username: </label></div>
                                <div className="col-sm-8"><input name="username" className="input-group" type="text" placeholder="Username" id="username" required="required" maxLength="50" /></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="password">Password: </label></div>
                                <div className="col-sm-8"><input name="password" className="input-group" type="password" placeholder="Password" id="password" required="required" maxLength="40" /></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="gender">Gender: </label></div>
                                <div className="col-sm-8">
                                    <select name="gender" className="input-group" type="dropdown" placeholder="Gender" id="gender" required="required" >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="unspecified">Unspecified</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="birthday">Birthday: </label></div>
                                <div className="col-sm-8"><input name="birthday" className="input-group" type="date" placeholder="Birthday" id="birthday" required="required" /></div>
                            </div>
                            <button type="submit" className="btn btn-primary">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateAccount;