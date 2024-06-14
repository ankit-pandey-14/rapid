import styled from "styled-components";

export const CustomModalWrapper = styled.div`
    display: ${(props) => props.show ? 'flex' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(221, 221, 221, 0.85);
    justify-content: center;

    @media(max-width: ${(props) => props.theme.media.largePhone}px) {
        padding: 10px;
    }
`;

export const CustomModalContainer = styled.div`
    background-color: ${(props) => props.theme.lightWhite};
    width: 600px;
    height: 600px;
    overflow-y: auto;
    border-radius: 5px;

    @media(max-width: ${(props) => props.theme.media.largePhone}px) {
        width: 90%;
    }
`;
    
export const CustomModalHeading = styled.div`
    justify-content: space-between;
    gap: 14px;
    font-size: 26px;
    font-weight: 500;
    color: ${(props) => props.theme.blackText};
    padding: 9px 14px;
    border-bottom: 1px solid #bbb;
`;
    
export const CustomModalBody = styled.div`
    padding: 9px 14px;
    border-bottom: 1px solid #bbb;
`;

export const CustomModalButton = styled.div`
    gap: 5px;
    justify-content: flex-end;
    padding: 9px 14px;
`;