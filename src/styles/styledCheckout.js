import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    padding: 130px 10% 100px 10%;
    display: flex;
`;

export const ProductsContainer = styled.div`
    width: 100%;
    padding: 20px;
    border: 2px solid #3888c2;
    border-radius: 10px;

    form {
        padding-top: 20px;

        input, textarea, button {
            width: 100%;
            border: none;
            border-radius: 3px;
            padding: 13px 5px;
            outline-style: none;
            margin: 5px 0;
            font-size: 16px;
            font-weight: bold;
            color: #665756;
        }

        button {
            background-color: #3888c2;
            color: #fae52a;
        }
    }
`;

export const Products = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    p {
        margin: 5px 0;
        color: #3888c2;
    }
`;