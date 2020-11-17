import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SingUp';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/sign-up' component={SignUp} />
                <Route path='/' component={Login} />
            </Switch>
        </Router>
    );
}