import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoIosAddCircle, IoIosRemoveCircle} from 'react-icons/io'

export default function ShopList(props) {

    const { product, selected, setSelected } = props;
    const { title, description, price, productUrl } = product;
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if(quantity === 1) {
            setSelected([...selected, true]);
        }
    }, [quantity]);

    function removeQuantity() {
        if(quantity > 1) {
            setQuantity(quantity - 1);
            selected.pop();
        }
        else {
            if(quantity === 1) {
                selected.pop();
                setQuantity(quantity - 1);
                setSelected([...selected]);
            }
        }
    }

    return (
        <ShopContainer>
            <img src={productUrl} />
            <div><strong>{title}</strong><strong>R$ {price}</strong></div>
            <p>{description}</p>
            <div>
                <IoIosAddCircle onClick={() => setQuantity(quantity + 1)} />
                <p>{quantity > 0 ? quantity : ''}</p>
                <IoIosRemoveCircle  className='remove' onClick={removeQuantity} />
            </div>
        </ShopContainer>
    );
}

const ShopContainer = styled.div`
    height: 300px;
    width: 15%;
    border: 2px solid #3888c2;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px 2.5%;

    img {
        width: 100%;
        height: 65%;
    }

    strong, p {
        padding: 5px;
        color: #3888c2;
        font-size: 12px;
    }

    div {
        display: flex;
        justify-content: space-between;

        p {
            margin-top: 6px;
        }
    }

    svg {
        padding: 5px;
        font-size: 35px;
        color: #3888c2;
        cursor: pointer;

        &.remove {
            color: #d1c73f;
        }
    }

    @media(max-width: 650px) {
        width: 95%;

        img {
            height: 72%;
        }
    }
`;