import styled from "styled-components";

export const FormFieldWrapper = styled.div`
    label {
        display: block;
        color: ${(props) => props.theme.blackText};
        font-weight: 500;
    }
    
    input, textarea {
        display: block;
        width: 100%;
        padding: 7px;
        border: 1px solid;
        border-color: ${(props) => props.theme.primaryHover};
        margin-top: 5px;
        outline: none;
        resize: none;
        height: 40px;
        border-radius: 5px;
        color: ${(props) => props.theme.blackText};
        background-color: ${(props) => props.theme.lightWhite};
    }
    
    .error {
        font-size: 12px;
        font-weight: 500;
        color: #f03232;
    }
`;

export const FormButtonWrapper = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    gap: 14px;
    justify-content: flex-end;

    @media(max-width: ${(props) => props.theme.media.tabs}px) {
        grid-column-start: auto;
        grid-column-end: auto;
    }
`;