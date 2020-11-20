import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa';

export default function Footer() {

    return (
        <>
            <FooterContainter>
                <FaOpencart />
                <h1>Checkout</h1>
            </FooterContainter>
        </>
    );
}

const FooterContainter = styled.header`
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #3888c2;
    display: flex;
    padding: 20px;
    height: 80px;
    z-index: 10;

    svg {
        color: #fae52a;
        font-size: 45px;
    }

    h1 {
        font-size: 32px;
        color: #fae52a;
        padding-left: 30px;
    }
`;