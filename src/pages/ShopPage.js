import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import ShopList from '../components/ShopList';
import Footer from '../components/Footer';
import { ProductList } from '../styles/styledShop';

export default function ShopPage() {

    const [products, setProducts] = useState([]);
    let [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        const request = axios.get('https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/products');

        request.then(response => {
            setProducts(response.data);
        });

        request.catch(() => {
            alert('something went wrong');
        });
    }, []);

    function cartController(product, type) {
        if(type === 'add') {
            setSelectedProducts([...selectedProducts, product]);
        } else {
            const index = selectedProducts.indexOf(product);
            selectedProducts.splice(index, 1);
            setSelectedProducts([...selectedProducts]);
        }
    }

    return (
        <>
            <Header />
            <ProductList>
                {products.length !== 0
                    ? products.map(product => (
                        <ShopList
                            product={product}
                            cartController={cartController}
                            key={product.productId}
                        />
                    ))
                    : <img src='https://i.gifer.com/GW5A.gif' />
                }
            </ProductList>
            {selectedProducts.length !== 0
                ? <Footer selectedProducts={selectedProducts} />
                : ''
            }
        </>
    );
}