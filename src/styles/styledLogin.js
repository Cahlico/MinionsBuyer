import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 80vh;
    justify-content: center;
    align-items: center;

    img {
        width: 40vw;
        height: 57vh;
    }
`;

export const FormContainer = styled.form`
    width: 40vw;
    height: 57vh;
    background-color: #3888c2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1, a {
        font-family: 'Righteous', cursive;
        color: #fae52a;
    }

    h1 {
        font-size: 22px;
        margin-top: -20;
        padding-bottom: 20px;
    }

    a {
        padding-top: 10px;
        cursor: pointer;
    }

    input, button {
        width: 90%;
        border: none;
        border-radius: 3px;
        padding: 13px 5px;
        outline-style: none;
        color: #3888c2;
        margin: 5px 0;
        font-size: 16px;
        font-weight: bold;
    }

    input {
        text-align: center;
        background-color: #f7f4b2;
        
        ::placeholder {
            color: #7ba9d1;
        }
    }

    button {
        margin-top: 20px;
        background-color: #fae52a;
        cursor: pointer;
    }

    button:hover {
        background-color: #dbd437;
    }
`;