import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="card bg-light mb-3 account">
                    <div className="card-header">Log In</div>
                    <div className="card-body">
                        <form action="submit">
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="username">User Name: </label></div>
                                <div className="col-sm-8"><input className="input-group" type="text" placeholder="User Name" id="username" /></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><label htmlFor="password">Password: </label></div>
                                <div className="col-sm-8"><input className="input-group" type="text" placeholder="Password" id="password" /></div>
                            </div>
                            <button type="submit" className="btn btn-primary">Log In</button>
                            <br />
                            <p>New to the site? <a href="">Create an account here.</a></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;