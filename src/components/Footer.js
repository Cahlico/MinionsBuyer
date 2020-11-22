import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa';

export default function Footer(props) {

    const { selectedProducts } = props;
    let totalPrice = 0;
    
    selectedProducts.forEach(prod => {
        totalPrice += prod.price;
    });

    return (
        <>
            <FooterContainer>
                <span>
                    <Link to={{ pathname:'/checkout', state: { selectedProducts, totalPrice }}}>
                        <FaOpencart />
                    </Link>
                    <Link to={{ pathname:'/checkout', state: { selectedProducts, totalPrice }}} >     
                        <h1>Checkout</h1>
                    </Link>
                </span>
                <strong>{totalPrice.toFixed(2).replace('.', ',')}</strong>
            </FooterContainer>
        </>
    );
}

const FooterContainer = styled.header`
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #3888c2;
    display: flex;
    justify-content: space-between;
    padding: 10px 5%;
    height: 60px;
    z-index: 10;

    span {
        display: flex;
    }

    svg {
        color: #fae52a;
        font-size: 45px;
        cursor: pointer;
    }

    h1 {
        font-size: 32px;
        color: #fae52a;
        padding-left: 30px;
        margin-top: 5px;
        cursor: pointer;
    }

    strong {
        color: #fae52a;
        padding: 10px 0;
    }
`;