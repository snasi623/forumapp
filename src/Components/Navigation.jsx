import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';

class Navigation extends Component {
    state = {
        boards: []
    }

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
                            Hello username.
                        </li>
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        )
    }
}

export default Navigation;
