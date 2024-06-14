import { styled } from 'styled-components';

export const ImageWrapper = styled.div`

`;

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: ${(props) => props.fit || 'cover'};
`;