import { ReactChild } from "react";
import styled from 'styled-components'

interface CardProps {
    children: ReactChild,
}

const Card = styled.div<CardProps>`
    display: inline-block;
    flex-direction: column;
    padding: 50px;
    grid-template-columns: 1fr 1fr;

    background: #FFFFFF;

    box-shadow: 0px 8px 16px rgba(171, 190, 209, 0.4);
    border-radius: 10px;
`



export default Card;
