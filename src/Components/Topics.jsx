//When you list all the threads. 

import React, { Component } from 'react';
import axios from 'axios';

class Topics extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        topics: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/topic`)
        .then(res => {
            const topics = res.data;
            this.setState({ topics });
            console.log(topics[0].threadname);
        })
    }
    
    render() {
        const topics = [];
        this.state.topics.forEach(topic => 
            topics.push(
                <div className="card-body" key={topic.id}>{topic.threadname}</div>
            )
        );

        return (
            <div>
                <h1>Topics</h1>
                <p>This is the place to discuss the Pixar brand.</p>
                <div className="card bg-light mb-3">
                    <div className="card-header">Topics</div>
                    {topics}
                </div>
            </div>
        )
    }
}

export default Topics;