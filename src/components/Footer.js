import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <>
            <FooterContainter>
                <h1>Footer</h1>
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
    z-index: 10;

    h1 {
        font-size: 32px;
        color: #fae52a;
    }
`;