import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoIosAddCircle, IoIosRemoveCircle} from 'react-icons/io'

export default function ShopList(props) {

    const { selected, setSelected } = props;
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if(quantity === 1) {
            setSelected([...selected, quantity]);
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
            <span>
                <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShI62H_s2tVghBMOZxDXmi1hqsdxUzI1MkDYEDH-hDJClYigUSf1hpLOMOzOGQyrQU2oQSLp0uZh9p9nszwPlJCmSZnN6VgZIOCZreOz0FdoAddup-gFXGHQ&usqp=CAE' />
                <div><strong>Minion Stuart</strong><strong>R$ 29,99</strong></div>
                <p>Boneco Minions Stuart Filme Tamanho Pequeno</p>
                <div>
                    <IoIosAddCircle onClick={() => setQuantity(quantity + 1)} />
                    <p>{quantity > 0 ? quantity : ''}</p>
                    <IoIosRemoveCircle  className='remove' onClick={removeQuantity} />
                </div>
            </span>
            <span>
                <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShI62H_s2tVghBMOZxDXmi1hqsdxUzI1MkDYEDH-hDJClYigUSf1hpLOMOzOGQyrQU2oQSLp0uZh9p9nszwPlJCmSZnN6VgZIOCZreOz0FdoAddup-gFXGHQ&usqp=CAE' />
            </span>
            <span>
                <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShI62H_s2tVghBMOZxDXmi1hqsdxUzI1MkDYEDH-hDJClYigUSf1hpLOMOzOGQyrQU2oQSLp0uZh9p9nszwPlJCmSZnN6VgZIOCZreOz0FdoAddup-gFXGHQ&usqp=CAE' />
            </span>
            <span>
                <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShI62H_s2tVghBMOZxDXmi1hqsdxUzI1MkDYEDH-hDJClYigUSf1hpLOMOzOGQyrQU2oQSLp0uZh9p9nszwPlJCmSZnN6VgZIOCZreOz0FdoAddup-gFXGHQ&usqp=CAE' />
            </span>
            <span>
                <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShI62H_s2tVghBMOZxDXmi1hqsdxUzI1MkDYEDH-hDJClYigUSf1hpLOMOzOGQyrQU2oQSLp0uZh9p9nszwPlJCmSZnN6VgZIOCZreOz0FdoAddup-gFXGHQ&usqp=CAE' />
            </span>
            <span>
                <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShI62H_s2tVghBMOZxDXmi1hqsdxUzI1MkDYEDH-hDJClYigUSf1hpLOMOzOGQyrQU2oQSLp0uZh9p9nszwPlJCmSZnN6VgZIOCZreOz0FdoAddup-gFXGHQ&usqp=CAE' />
            </span>
            <span>
                <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShI62H_s2tVghBMOZxDXmi1hqsdxUzI1MkDYEDH-hDJClYigUSf1hpLOMOzOGQyrQU2oQSLp0uZh9p9nszwPlJCmSZnN6VgZIOCZreOz0FdoAddup-gFXGHQ&usqp=CAE' />
            </span>
            <span>
                <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShI62H_s2tVghBMOZxDXmi1hqsdxUzI1MkDYEDH-hDJClYigUSf1hpLOMOzOGQyrQU2oQSLp0uZh9p9nszwPlJCmSZnN6VgZIOCZreOz0FdoAddup-gFXGHQ&usqp=CAE' />
            </span>
        </ShopContainer>
    );
}

const ShopContainer = styled.main`
    padding: 130px 10% 100px 10%;
    display: flex;
    flex-wrap: wrap;

    img {
        width: 100%;
    }

    span {
        width: 15%;
        border: 2px solid #3888c2;
        border-radius: 10px;
        overflow: hidden;
        margin: 10px 2.5%;

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
    }

    @media(max-width: 650px) {
        span {
            width: 95%;
        }
    }
`;