import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const FontWeights = {
    'extreme-bold': '900',
    'bold': '700',
    'semi-bold': '600',
    'normal-bold' : '500',
    'normal' : '400',
}

const commonButtonStyle = styled(Link)`
    display: flex;
    padding: 8px 20px;
    background-color: transparent;
    border-radius: ${(props) => props.rounded ? '50%' : '20px'};
    text-decoration: none;
    font-weight: ${(props) => FontWeights[props.weight]}
`;

export const PrimaryButtonStyle = styled(commonButtonStyle)`
    background-color: ${(props) => props.theme.primaryBtnBg};
    color: ${(props) => props.theme.primaryBtnColor};
`;

export const OutlineButtonStyle = styled(commonButtonStyle)`
    border: 1px solid;
    border-color: ${(props) => props.theme.primaryHover};
    color: ${(props) => props.theme.primaryHover};
`;

export const LinkButtonStyle = styled(commonButtonStyle)`
    padding: 0;
`;