import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ShopPage from '../pages/ShopPage';
import Checkout from '../pages/Checkout';
import SessionContext from '../contexts/SessionContext';

export default function App() {

    const [session, setSession] = useState({});
    /*const localData = localStorage.data !== undefined ? JSON.parse(localStorage.data) : {};
    const [userInfo, setUserInfo] = useState(localData);*/

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