import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';

class Navigation extends Component {
    // componentDidMount() {
    //     // this.props.getSessionId().then(sessionId => {
    //     //     this.props.getMe(sessionId).then(me => console.log(me))
    //     // })
    // }

    render() {
        return (
            <div className="navigation">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
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
                        <li className="nav-item">
                            <Link to="/updateaccount">Update Username's Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout">Sign Off</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        )
    }
}

export default Navigation;
