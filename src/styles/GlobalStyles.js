import { createGlobalStyle } from "styled-components";

export const LightTheme = {
    blackText: '#333',
    lightBlack: '#666',
    blackBg: '#000',
    lightWhite: '#fff',
    primaryBg: '#6b00d7',
    primaryHover: '#000',

    mobileMenu: '#aa74e2',

    primaryColor: '#6b00d7',
    primaryBtnBg: '#f0f013',
    primaryBtnColor: '#000',

    media: {
        tabs: 768,
        largePhone: 550,
        phone: 500,
    },
};

export const DarkTheme = {
    blackText: '#fff',
    lightBlack: '#cfcfcf',
    blackBg: '#888',
    lightWhite: '#333',
    primaryBg: '#333',
    primaryHover: '#aa74e2',

    mobileMenu: '#888',

    primaryBtnBg: '#6b00d7',
    primaryBtnColor: '#fff',

    media: {
        tabs: 768,
        largePhone: 550,
        phone: 500,
    }
};

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    button {
        border: none;
    }

    .d-block {
        display: block;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    .container {
        padding-left: 60px;
        padding-right: 60px;
    }

    .w-fit {
        width: fit-content;
    }

    // styles with flex layout
    .d-flex {
        display: flex;
    }
    .justify-content-end {
        justify-content: flex-end;
    }
    .justify-content-between {
        justify-content: space-between;
    }
    .align-items-center {
        align-items: center;
    }
    
    // styles with grid layout
    .d-grid {
        display: grid;
    }

    @media(max-width: ${(props) => props.theme.media.tabs}px) {
        .container {
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    @media(max-width: ${(props) => props.theme.media.phone}px) {
        .container {
            padding-left: 10px;
            padding-right: 10px;
        }
    }
`;

export default GlobalStyles;
