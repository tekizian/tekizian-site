import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from '../Home';
import {Link1} from '../Link1';
import logo from '../../logo.svg';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div>
                <main>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/link1' component={Link1}/>
                    </Switch>
                </main>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Currently <code>under construction</code>.
                    </p>
                </header>
            </div>
        );
    }
}