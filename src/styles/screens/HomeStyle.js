import styled from "styled-components";

// Banner Styles
export const BannerWrapper = styled.section`
    background-color: ${(props) => props.theme.primaryBg};
    padding-top: 20px;
    padding-bottom: 20px;

    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    place-items: center;

    .banner-image {
        width: 100%;
        height: 450px;
    }

    @media(max-width: ${(props) => props.theme.media.tabs}px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;

        .banner-image {
            height: 250px;
        }
    }
`;

export const BannerText = styled.div`
    color: #fff;

    h1 {
        font-size: 45px;
        font-weight: 400;
        letter-spacing: 1px;
        margin-bottom: 5px;
    }
    
    p {
        margin-bottom: 23px;
    }

    @media(max-width: ${(props) => props.theme.media.tabs}px) {
        order: 1;
        text-align: center;

        a {
            margin: auto;
        }
    }
`;


// Info Styles
export const InfoWrapper = styled.section`
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: ${(props) => props.theme.lightWhite};

    @media(max-width: ${(props) => props.theme.media.tabs}px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media(max-width: ${(props) => props.theme.media.phone}px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ServiceWarpper = styled.section`
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: ${(props) => props.theme.lightWhite};
`;

export const ServiceContentWarpper = styled.div`
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    .image {
        height: 320px;
    }
    
    @media(max-width: ${(props) => props.theme.media.tabs}px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media(max-width: ${(props) => props.theme.media.phone}px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
    }
`;