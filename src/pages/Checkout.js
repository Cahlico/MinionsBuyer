import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import { CheckoutContainer, ProductsContainer, Products } from '../styles/styledCheckout';

export default function Checkout() {

    const { state } = useLocation();
    console.log(state);
    const { selectedProducts, totalPrice } = state;
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');

    function  purchaseRequest() {
        const format = /^[0-9]{5}\-[0-9]{3}$/;

        if(!format.test(cep)) {
            alert('invalid cep');
            return;
        } else if(email === '' || address === '') {
            alert('fill in all the filds');
            return;
        }

        const buyFormat = {email, cep, address, totalPrice, 'products': selectedProducts};

        const request = axios.post('https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/user/products', buyFormat);
        request.catch(() => {
            alert('your request has failed please try again');
        })
    }

    return (
        <>
            <Header />
            <CheckoutContainer>
                <ProductsContainer>
                    {selectedProducts.map((prod, i) => (
                        <Products key={prod.productId + 5*i}> 
                            <p>{i}</p>
                            <p>{prod.title}</p>
                            <p>{prod.price.toFixed(2).replace('.', ',')}</p>
                        </Products>
                    ))}
                    <Products>
                        <p>Total</p>
                        <p>{totalPrice.toFixed(2).replace('.', ',')}</p>
                    </Products>
                    <form onSubmit={purchaseRequest}>
                        <input 
                            type='email' 
                            onChange={e => setEmail(e.target.value)} 
                            value={email} 
                            placeholder='e-mail'
                        />
                        <input 
                            type='text' 
                            onChange={e => setCep(e.target.value)} 
                            value={cep} 
                            placeholder='cep'
                        />
                        <textarea 
                            type='text' 
                            onChange={e => setAddress(e.target.value)} 
                            value={address} 
                            placeholder='address'
                        />
                        <button type='submit' >BUY</button>
                    </form>
                </ProductsContainer>
            </CheckoutContainer>
        </>
    );
}