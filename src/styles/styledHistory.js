import styled from 'styled-components';

export const modalStyles = {
    content : {
        top: '55%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#2f517a',
        borderRadius: '30px',
        fontSize: '40px',
        fontWeight: 'bold',
        padding: '30px 20px',
        color: '#FFF'
    }
};

export const HistoryScreen = styled.div`
    width: 70vw;
    height: 380px;
    background-color: #3888c2;
    color: #f7f4b2;
    text-align: center;
    border-radius: 20px;

    h1 {
        font-size: 40px;
        font-weight: bold;
        padding: 30px 20px;
    }

    button {
        border: none;
        border-radius: 3px;
        padding: 10px 5px;
        outline-style: none;
        font-size: 16px;
        font-weight: bold;
        width: 20%;
        margin-right: 20px;
        margin-top: 10px;
        background-color: #FFF;
        color: #3091b8;

        &.delete {
            color: #FFF;
            background-color: #3091b8;
        }
    }

    button:hover {
        background-color: #d4d6d9;

        &.delete{
            background-color: #5db0cf;
        }
    }

    @media(max-width: 600px) {
        width: 90vw;
        height: 38vh;
        
         button {
             width: 30%;
         }
    }
`;

export const Load = styled.img`
    width: 20%;
    margin: -20px 40%;

    @media (max-width: 600px) {
        width: 60vw;
    }
`;