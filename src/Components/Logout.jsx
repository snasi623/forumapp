import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { doHttpPost } from '../util.js'

class Logout extends Component {
    state = {}

    componentDidMount() {
        doHttpPost(`/user/logout`, {}, this.props.getSessionId())
            .then(r => {
                this.props.clearSessionId();
                window.location.replace('/')
            }).catch(e => {
                this.props.clearSessionId();
                window.location.replace('/')
            })
    }
    
    render() {
        return (
            <div>
                <h1>Thank you for visiting.</h1>
                <p>You have been successfully logged out. Was this a mistake? <Link to="/login">Log back in.</Link></p>
            </div>
        )
    }
}

export default Logout;