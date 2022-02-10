import React, { Component } from 'react';

class CreateAccount extends Component {
    render() {
        return (
            <div>
                <div className="card bg-light mb-3 account">
                    <div className="card-header">Create Account</div>
                    <div className="card-body">
                        <form action="submit">
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="email">Email: </label></div>
                                <div className="col-sm-8"><input className="input-group" type="email" placeholder="Email" id="email" /></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="username">Username: </label></div>
                                <div className="col-sm-8"><input className="input-group" type="text" placeholder="Username" id="username" /></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="password">Password: </label></div>
                                <div className="col-sm-8"><input className="input-group" type="text" placeholder="Password" id="password" /></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="gender">Gender: </label></div>
                                <div className="col-sm-8">
                                    <select className="input-group" type="dropdown" placeholder="Gender" id="gender">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="unspecified">Unspecified</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="birthday">Birthday: </label></div>
                                <div className="col-sm-8"><input className="input-group" type="date" placeholder="Birthday" id="birthday" /></div>
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