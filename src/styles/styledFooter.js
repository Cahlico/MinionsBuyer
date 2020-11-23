import styled from 'styled-components';

export const FooterContainer = styled.header`
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #3888c2;
    display: flex;
    justify-content: space-between;
    padding: 10px 5%;
    height: 60px;
    z-index: 10;

    span {
        display: flex;
    }

    svg {
        color: #fae52a;
        font-size: 45px;
        cursor: pointer;
    }

    h1 {
        font-size: 32px;
        color: #fae52a;
        padding-left: 30px;
        margin-top: 5px;
        cursor: pointer;
    }

    strong {
        color: #fae52a;
        padding: 10px 0;
    }

    @media(max-width: 650px) {
        strong {
            margin-top: 4px;
        }
    }
`;