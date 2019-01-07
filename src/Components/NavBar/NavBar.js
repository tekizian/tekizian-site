import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/link1">
                        Link 1
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link 2
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
