import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { IoIosClose } from 'react-icons/io';

import SessionContext from '../contexts/SessionContext';
import { modalStyles, HistoryScreen, Load } from '../styles/styledHistory';

export default function MyRequests() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const { session } = useContext(SessionContext);
    const { token, userId } = session;
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if(!userId) return;
        
        const request = axios.get(`https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/products/${userId}`, { headers: { 'Authorization': `bearer ${token}`}});
        request.then(response => {
            setProducts(response.data.products);
            setTotalPrice(response.data.totalPrice);
        });
    }, []);

    return(
        <>
            <a onClick={() => setIsOpen(true)} >Last buy</a>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={modalStyles}
                contentLabel="purchase history"
            >
                <HistoryScreen>
                    <IoIosClose onClick={() => setIsOpen(false)} />
                    <h1>Last purchase</h1>
                    {products.length !== 0
                            ? <>
                                {products.map((prod, i) => (
                                    <p key={(prod.productId + i) * (i*3)} >{prod.title} {prod.price.toFixed(2).replace('.', ',')}</p>
                                ))}
                                <p>total: {totalPrice.toFixed(2).replace('.', ',')}</p>
                            </>
                            : <p>Your purchases are still empty</p>
                    }
                </HistoryScreen>
            </Modal>
        </>
    );
}

Modal.setAppElement(document.getElementById('root'));