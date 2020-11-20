import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import ShopList from '../components/ShopList';
import Footer from '../components/Footer';
import { ProductList } from '../styles/styledShop';

export default function ShopPage() {

    const [selected, setSelected] = useState([]);
    const [products, setProducts] = useState([]);

    console.log(products)

    useEffect(() => {
        const request = axios.get('https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/products');

        request.then(response => {
            setProducts(response.data);
        });

        request.catch(() => {
            alert('something went wrong');
        });
    }, []);

    return (
        <>
            <Header />
            <ProductList>
                {products.length !== 0
                    ? products.map(product => (
                        <ShopList
                            product={product}
                            selected={selected}
                            setSelected={setSelected}
                            key={product.productId}
                        />
                    ))
                    : <img src='https://i.gifer.com/GW5A.gif' />
                }
            </ProductList>
            {selected.length !== 0
                ? <Footer />
                : ''
            }
        </>
    );
}