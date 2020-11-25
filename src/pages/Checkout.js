import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

import Header from '../components/Header';
import { CheckoutContainer, ProductsContainer, Products } from '../styles/styledCheckout';
import SessionContext from '../contexts/SessionContext';
import { DebounceInput } from 'react-debounce-input';

export default function Checkout() {

    const { state } = useLocation();
    const { selectedProducts, totalPrice } = state;
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const { session } = useContext(SessionContext);
    const { token, email, userId } = session;
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    function  purchaseRequest(event) {
        event.preventDefault();
        setLoading(true);

        const format = /^[0-9]{5}\-[0-9]{3}$/;

        if(!format.test(cep)) {
            alert('invalid cep');
            setLoading(false);
            return;
        } else if(address === '') {
            alert('fill in all the filds');
            setLoading(false);
            return;
        }

        const buyFormat = {userId, email, cep, address, totalPrice, 'products': selectedProducts};

        const request = axios.post('https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/user/products', buyFormat, { headers: { 'Authorization': `bearer ${token}`}});
        request.then(() => {
            alert('success!');
            history.push('/shop-page');
        })
        request.catch((response) => {
            alert(`${response} - your request has failed please try again`);
            setLoading(false);
        })
    }

    return (
        <>
            <Header />
            <CheckoutContainer>
                <ProductsContainer>
                    {selectedProducts.map((prod, i) => (
                        <Products key={prod.productId + 5*i}> 
                            <p>{i + 1}</p>
                            <p>{prod.title}</p>
                            <p>{prod.price.toFixed(2).replace('.', ',')}</p>
                        </Products>
                    ))}
                    <Products>
                        <p>Total</p>
                        <p>{totalPrice.toFixed(2).replace('.', ',')}</p>
                    </Products>
                    {loading
                        ? <>
                            <img src='https://i.gifer.com/GW5A.gif' />
                            <img src='https://i.gifer.com/GW5A.gif' />
                            <img src='https://i.gifer.com/GW5A.gif' />
                        </>
                        : <form onSubmit={purchaseRequest}>
                            <DebounceInput
                                type='text' 
                                minLength={8}
                                debounceTimeout={300}
                                onChange={e => setCep(e.target.value)} 
                                value={cep} 
                                placeholder='cep: 12345-678'
                            />
                            <DebounceInput 
                                type='text'
                                element="textarea"
                                minLength={5}
                                debounceTimeout={400}
                                onChange={e => setAddress(e.target.value)} 
                                value={address} 
                                placeholder='address'
                            />
                            <button type='submit' >BUY</button>
                        </form>
                    }
                </ProductsContainer>
            </CheckoutContainer>
        </>
    );
}