import React from 'react';
import { Link } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa';

import { FooterContainer } from '../styles/styledFooter';

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