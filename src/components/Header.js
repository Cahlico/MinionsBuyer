import React, { useState, useContext } from 'react';
import  { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import { HeaderContainter, Menu } from '../styles/styledHeader';
import SessionContext from '../contexts/SessionContext';
import MyRequests from './MyRequests';

export default function Header() {

    const [clicked, setClicked] = useState(false);
    const { session } = useContext(SessionContext);
    const { userId } = session;
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    function logout() {
        setLoading(true);

        const request = axios.delete(`https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/sign-out/${userId}`);
        request.then(() => {
            history.push('/');
        });
        request.catch(response => {
            alert(response);
            setLoading(false);
        });
    }

    return (
        <>
            <HeaderContainter>
                <Link to='/shop-page'><h1>Minions Shop</h1></Link>
                {clicked
                    ? <BsChevronDown onClick={() => setClicked(!clicked)} />
                    : <BsChevronUp onClick={() => setClicked(!clicked)} />
                }
            </HeaderContainter>
            <Menu clicked={clicked} >
                {loading
                    ? <img src='https://www.belmahotels.com/wp-content/themes/belma_child/img/loader.gif' />
                    :  <a onClick={logout}>Logout</a>
                }
                <MyRequests />
            </Menu>
        </>
    );
}