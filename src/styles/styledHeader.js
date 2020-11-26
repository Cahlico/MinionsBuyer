import styled from 'styled-components';

export const HeaderContainter = styled.header`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #3888c2;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    z-index: 10;

    h1 {
        font-size: 32px;
        color: #fae52a;
    }

    svg {
        font-size: 32px;
        color: #fae52a;
        margin-right: 20px;
    }

    @media(max-width: 600px) {
        svg {
            margin-right: 8px;
        }
    }
`;

export const Menu = styled.nav`
    position: fixed;
    right: 0px;
    top: ${props => props.clicked ? '65px' : '0px'};
    background-color: #3888c2;
    border-radius: 0 0 0 5px;
    z-index: 1;
    transition: top .5s ease-in-out;
    padding: 10px 20px;

    a {
        display: block;
        color: #fae52a;
        padding-top: 8px;
        cursor: pointer;
    }

    img {
        height: 40px;
    }
`;