import styled from "styled-components";

export const FooterWrapper = styled.footer`
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: ${(props) => props.theme.blackBg};

    grid-template-columns: repeat(5, 1fr);
    gap: 23px;
    
    a {
        color: ${(props) => props.theme.lightWhite};
        transition: all 0.3s ease;
        gap: 3px;
        margin-top: 9px;
        font-weight: 600;

        &:first-child {
            margin-top: 0;
        }

        i {
            font-size: 14px;
        }

        &:hover {
            color: #6b00d7;
        }
    }
    
    @media(max-width: ${(props) => props.theme.media.tabs}px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media(max-width: ${(props) => props.theme.media.phone}px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const FooterLinksWrapper = styled.div``;