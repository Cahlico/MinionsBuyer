import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import SessionContext from '../contexts/SessionContext';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ShopPage from '../pages/ShopPage';
import Checkout from '../pages/Checkout';

export default function App() {

    const localData = localStorage.data !== undefined ? JSON.parse(localStorage.data) : {};
    const [session, setSession] = useState(localData);

    return (
        <SessionContext.Provider value={{ session, setSession }} >
            <Router>
                <Switch>
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/checkout' component={Checkout} />
                    <Route path='/shop-page' component={ShopPage} />
                    <Route path='/' component={SignIn} />
                </Switch>
            </Router>
        </SessionContext.Provider>
    );
}