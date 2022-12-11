import styled from 'styled-components'
// import {ReactChild} from 'react'
import PropTypes from 'prop-types';
// import styles from '../../styles/button.module.css'

interface ButtonProps {
    // children ?: ReactChild,
    variant ?: string,
    disabled ?: boolean
}

const Button = styled.button<ButtonProps>`
	text-align: center;
    padding: 15px 40px;
    height: 50px;
	color: ${(props) =>
		props.variant === 'primary'
			? props.theme.colors.white
			: props.theme.colors.accent};
	background-color: ${(props) =>
		props.variant === 'primary'
			? props.theme.colors.accent
			: props.theme.colors.white};
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.accent};
	border-radius: 5px;
	font-size: 14px;
    box-shadow: none;
    transition: 0.2s;
	&:active {
		border-color: ${(props) => props.variant === 'primary'
         ? props.theme.colors.accenthover
         : props.theme.colors.secondary};
         background-color: ${(props) => props.variant === 'primary'
          ? props.theme.colors.accenthover
          : props.theme.colors.disabled};
		cursor: pointer;
        box-shadow: none;
    };
	&:hover {
        box-shadow: 0px 2px 4px ${(props) => props.theme.colors.accenthover};
        transition: box-shadow 0.2s ease-in-out;
		border-color: ${(props) => props.theme.colors.accenthover};
		cursor: pointer;
	};
	&:hover:not {
        transition: 0.2s;
	}
`;

export default Button;