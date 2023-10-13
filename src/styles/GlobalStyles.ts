import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};

    * {
        box-sizing: border-box;
    }
    html,
    body {
        background-color: transparent;
    }

    img {
        vertical-align: top;
    }

    button {
        padding: 0;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyles;
