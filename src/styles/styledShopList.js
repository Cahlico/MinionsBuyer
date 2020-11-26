import styled from 'styled-components';

export const ShopContainer = styled.div`
    height: 300px;
    width: 15%;
    border: 2px solid #3888c2;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px 2.5%;
    position: relative;

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
            position: absolute;
            bottom: 5px;
            left: 47%;
        }
    }

    svg {
        font-size: 25px;
        color: #3888c2;
        cursor: pointer;

        &.add {
            position: absolute;
            bottom: 5px;
            left: 5px;
        }

        &.remove {
            position: absolute;
            color: #d1c73f;
            right: 5px;
            bottom: 5px;
        }
    }

    @media(max-width: 650px) {
        width: 95%;

        img {
            height: 72%;
        }
    }
`;