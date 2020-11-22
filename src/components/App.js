import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ShopPage from '../pages/ShopPage';
import Checkout from '../pages/Checkout';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/checkout' component={Checkout} />
                <Route path='/' component={ShopPage} />
            </Switch>
        </Router>
    );
}