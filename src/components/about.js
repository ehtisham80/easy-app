import React, { Component } from 'react';
import Lion from '../images/lion.jpg';

export default class about extends Component {
    render() {
        return (
            <div className="container">
                <h1>About Page</h1>
                <img src={Lion} alt="" style={{ width:500 }} />
            </div>
        )
    }
}
