import React, { useState, useEffect } from 'react';
import { IoIosAddCircle, IoIosRemoveCircle} from 'react-icons/io';
import { ShopContainer } from '../styles/styledShopList';

export default function ShopList(props) {

    const { product, cartController } = props;
    const { title, description, price, productUrl } = product;
    const [quantity, setQuantity] = useState(0);

    function addToCart() {
        setQuantity(quantity + 1);
        cartController(product, 'add');
    }

    function removeFromCart() {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
        else {
            if(quantity === 1) {
                setQuantity(quantity - 1);
            }
        }
        cartController(product, 'remove');
    }

    return (
        <ShopContainer>
            <img src={productUrl} />
            <div><strong>{title}</strong><strong>R$ {price}</strong></div>
            <p>{description}</p>
            <div>
                <IoIosAddCircle className='add' onClick={addToCart} />
                <p>{quantity > 0 ? quantity : ''}</p>
                <IoIosRemoveCircle  className='remove' onClick={removeFromCart} />
            </div>
        </ShopContainer>
    );
}