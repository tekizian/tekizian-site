import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
                        <Link to="/">React-Bootstrap</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem componentClass={Link} eventKey={1} href='/link1' to='/link1'>
                            Link 1
                    </NavItem>
                    <NavItem componentClass={Link} eventKey={2} href="#" to="#">
                        Link 2
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
