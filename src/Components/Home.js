import React, { Component } from 'react';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <h1>Home: {process.env.PUBLIC_URL}</h1>
        );
    }
}