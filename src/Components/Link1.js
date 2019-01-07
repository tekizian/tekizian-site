import React, { Component } from 'react';

export class Link1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <h1>Link1: {process.env.PUBLIC_URL}</h1>
        );
    }
}