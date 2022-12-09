import styled from 'styled-components'
import {ReactChild} from 'react'

interface ButtonProps {
    children : ReactChild,
    bgColor ?: string,
    color ?: string,
    borderColor ?: string,
}

const Button = styled.button<ButtonProps>`
    box-sizing: border-box;
    width: 166px;
    height: 50px;
    margin-left: 10px;
    cursor:pointer;

    background: ${(props) => props.bgColor ? props.bgColor : "#FFFFFF"};
    color: ${(props) => props.color ? props.color : "#09142F"};
    border: 1px solid ${(props) => props.borderColor ? props.borderColor : "#09142F"};

    border-radius: 5px;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    text-align: center;

`
export default Button;