import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import baseUrl from './ApiPath';

class Logout extends Component {
    
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        const setSessionId = this.props.setSessionId
        e.preventDefault();
        const formData = new FormData(this.inputRef.current)
        let entryData = {}
        for (var [key, value] of formData.entries()) { 
            entryData[key] = value
        }
        axios.post(`${baseUrl}/user/login`, entryData)
            .then(res => {
                const loginResponse = res.data;
                console.log(JSON.stringify(loginResponse))
                setSessionId(loginResponse.sessionId)
                this.props.getMe(loginResponse.sessionId).then(me => console.log(me))
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