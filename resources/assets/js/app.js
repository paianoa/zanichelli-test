// app.js

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route ,Switch} from 'react-router';
import history from './history'

import CreateUser from './components/CreateUser';
import DisplayUser from './components/DisplayUser';



render(
    <Router history={history}>



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

                <Switch>
                    <Route path="/" exact component={DisplayUser} />
                    {/*  <Route path="/create-user" render={(props) => <CreateUser{...props} editMode={false} />}/>
                    <Route path="/edit/:id" render={(props) => <CreateUser {...props} editMode={true} />} />*/}
                </Switch>

            </div>
        </div>




    </Router>,
    document.getElementById('main')

);