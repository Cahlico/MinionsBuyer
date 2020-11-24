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
    overflow-y: scroll;
    position: relative;

    h1 {
        font-size: 40px;
        font-weight: bold;
        padding: 30px 20px;
    }

    p {
        font-size: 22px;
        font-weight: bold;
        padding: 10px 25%;
    }

    svg {
        position: absolute;
        font-size: 20px;
        color: #f7f4b2;
        top: 10px;
        right: 15px;
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
    width: 50%;
    margin: 0 25%;

    @media (max-width: 600px) {
        width: 60vw;
    }
`;