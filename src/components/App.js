import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SingUp';
import ShopPage from '../pages/ShopPage';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/sign-up' component={SignUp} />
                <Route path='/shop-page' component={ShopPage} />
                <Route path='/' component={Login} />
            </Switch>
        </Router>
    );
}