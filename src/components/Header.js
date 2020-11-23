import React, { useState, useContext } from 'react';
import  { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';

import { HeaderContainter, Menu } from '../styles/styledHeader';
import SessionContext from '../contexts/SessionContext';
import MyRequests from './MyRequests';

export default function Header() {

    const [clicked, setClicked] = useState(false);
    const { setSession } = useContext(SessionContext);
    const history = useHistory();

    function logout() {
        setSession({});
        history.push('/');
    }

    return (
        <>
            <HeaderContainter>
                <h1>Minions Shop</h1>
                {clicked
                    ? <BsChevronDown onClick={() => setClicked(!clicked)} />
                    : <BsChevronUp onClick={() => setClicked(!clicked)} />
                }
            </HeaderContainter>
            <Menu clicked={clicked} >
                <a onClick={logout}>Logout</a>
                <MyRequests />
            </Menu>
        </>
    );
}