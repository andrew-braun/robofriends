import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return(
            <div>
                <h1 className="f1 tc">Hello world</h1>
                <p className="tc">Welcome to React</p>
                <p className="tc">{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello;