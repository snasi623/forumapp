import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.renderLoginButton = this.renderLoginButton.bind(this);
    }
    
    state = {
        username: "Guest",
        isLoggedIn: false
    }

    componentDidMount() {
        this.props.getMe(this.props.getSessionId())
            .then(me => this.setState({ username: me.username, isLoggedIn: true }))
            .catch(e => this.setState({ username: "Guest" }))
    }

    renderLoginButton() {
        if (this.state.isLoggedIn) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-header">
                        Forum App
                    </li>
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/updateaccount">Update {this.state.username} Account</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logout">Sign Off</Link>
                    </li>
                </ul>
            )
        }
        return (
            <ul className="navbar-nav">
                <li className="nav-header">
                    Forum App
                </li>
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        );
    }

    render() {
        return (
            <div className="navigation">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    {this.renderLoginButton()}
                </nav>
                <Outlet />
            </div>
        )
    }
}

export default Navigation;
