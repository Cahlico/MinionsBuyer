import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ShopPage from '../pages/ShopPage';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={ShopPage} />
            </Switch>
        </Router>
    );
}