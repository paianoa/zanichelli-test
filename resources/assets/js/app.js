// app.js

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Master from './components/Master';
import CreateUser from './components/CreateUser';
import DisplayUser from './components/DisplayUser';
import EditUser from './components/EditUser';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Master} >
            <Route path="/create-user" component={CreateUser} />
            <Route path="/display-user" component={DisplayUser} />
            <Route path="/edit/:id" component={EditUser} />
        </Route>
    </Router>,
    document.getElementById('main')

);