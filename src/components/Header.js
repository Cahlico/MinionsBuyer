import React, { useState, useContext } from 'react';
import  { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { HeaderContainter, Menu } from '../styles/styledHeader';
import SessionContext from '../contexts/SessionContext';
import MyRequests from './MyRequests';

export default function Header() {

    const [clicked, setClicked] = useState(false);
    const { session } = useContext(SessionContext);
    const { userId } = session;
    const history = useHistory();

    function logout() {
        const request = axios.delete(`https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/sign-out/${userId}`);
        request.then(() => {
            history.push('/');
        });
        request.catch(response => {
            alert(response);
        });
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