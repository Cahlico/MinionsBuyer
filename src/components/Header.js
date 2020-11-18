import React, { useState } from 'react';
import styled from 'styled-components';
import  { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Header() {

    const [clicked, setClicked] = useState(false);

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
                <a>history</a>
                <Link to='/'>logout</Link>
            </Menu>
        </>
    );
}

const HeaderContainter = styled.header`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #3888c2;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    z-index: 10;

    h1 {
        font-size: 32px;
        color: #fae52a;
    }

    svg {
        font-size: 32px;
        color: #fae52a;
        margin-right: 20px;
    }
`;

const Menu = styled.nav`
    position: fixed;
    right: 0px;
    top: ${props => props.clicked ? '65px' : '0px'};
    background-color: #3888c2;
    border-radius: 0 0 0 5px;
    z-index: 1;
    transition: top .5s ease-in-out;
    padding: 10px 20px;

    a {
        display: block;
        color: #fae52a;
        padding-top: 8px;
        cursor: pointer;
    }
`;