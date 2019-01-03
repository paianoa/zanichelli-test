// Master.js

import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import DisplayUser from "./DisplayUser";

class Master extends Component {
    render(){
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Zanichelli</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </nav>
                <div>

                    { this.props.children!=null ?  this.props.children : <DisplayUser/>  }

                </div>
            </div>
        )
    }
}
export default Master;