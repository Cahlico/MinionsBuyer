import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

import SessionContext from '../contexts/SessionContext';
import { modalStyles, HistoryScreen, Load } from '../styles/styledHistory';

export default function MyRequests() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const { session } = useContext(SessionContext);
    const { token, userId } = session;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/products/${userId}`, { headers: { 'Authorization': `bearer ${token}`}});
        request.then(response => {
            response.data.forEach(e => {
                console.log(e);
            });
            setLoading(false);
        })
    });

    return(
        <>
            <a onClick={() => setIsOpen(true)} >History</a>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={modalStyles}
                contentLabel="purchase history"
            >
                <HistoryScreen>
                    <h1>Your purchases</h1>
                    {loading
                        ? <Load src='https://i.gifer.com/GW5A.gif' />
                        : products.length !== 0
                            ? <>
                                <button onClick={() => setIsOpen(false)}>Cancelar</button>
                                <button onClick={() => deletePost()} className='delete'>Excluir</button>
                            </>
                            : <p>Your purchases are still empty</p>   
                    }
                </HistoryScreen>
            </Modal>
        </>
    );
}

Modal.setAppElement(document.getElementById('root'));