import React from 'react';
import styled from 'styled-components';

export default function ShopList() {

    return (
        <ShopContainer>
            <span>
                <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShI62H_s2tVghBMOZxDXmi1hqsdxUzI1MkDYEDH-hDJClYigUSf1hpLOMOzOGQyrQU2oQSLp0uZh9p9nszwPlJCmSZnN6VgZIOCZreOz0FdoAddup-gFXGHQ&usqp=CAE' />
                <strong>Minion Stuart</strong>
                <p>Boneco Minions Stuart Filme Tamanho Pequeno</p>
                <strong>R$ 29,99</strong>
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
    }
`;