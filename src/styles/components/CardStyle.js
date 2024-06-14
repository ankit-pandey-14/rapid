import styled from "styled-components";

export const CradWrapper = styled.div`
`;

export const CardImageWrapper = styled.div`
    i {
        font-size: 23px;
        color: #6b00d7;
    }
`;

export const CardContentWrapper = styled.div``;

export const CardHeading = styled.h6`
    color: ${(props) => props.theme.blackText};
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 7px;
`;

export const CardDescription = styled.p`
    color: ${(props) => props.theme.lightBlack};
`;