import { ReactChild } from "react";
import styled from 'styled-components'

interface CardProps {
    children: ReactChild,
}

const Card = styled.div<CardProps>`
    box-sizing: border-box;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    padding: 50px;

    background: #FFFFFF;
    /* Shadow card */

    box-shadow: 0px 8px 16px rgba(171, 190, 209, 0.4);
    border-radius: 10px;
`

export default Card;