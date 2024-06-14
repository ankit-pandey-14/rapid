import styled from "styled-components";

export const ContactWrapper = styled.section`
    padding-top: 20px;
    padding: 30px;
    flex-direction: column;
    gap: 23px;
    background-color: ${(props) => props.theme.lightWhite};

    form {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 23px;

        @media(max-width: ${(props) => props.theme.media.tabs}px) {
            grid-template-columns: repeat(1, 1fr);
            
        }
    }
    
`;

export const ContactDataWrapper = styled.div`
    grid-template-columns: repeat(1, 1fr);
    background-color: ${(props) => props.theme.lightWhite};
`;

export const SingleDataWrapper = styled.div`
    gap: 5px;
    margin-top: 9px; 
`;

export const DataLabel = styled.div`
    width: 30%;
    font-weight: 600;
    color: ${(props) => props.theme.blackText};
`;

export const DataValue = styled.div`
    width: 65%;
    color: ${(props) => props.theme.blackText};

    .profile-image {
        width: 200px;
        height: 150px;
        border: 1px solid #eee;
    }
    
    .banner-image {
        width: 100%;
        height: 200px;
        border: 1px solid #eee;
    }
`;