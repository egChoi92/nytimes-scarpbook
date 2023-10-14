import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
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
    a{
        color: inherit;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
            text-underline-position: under;
        }
    }
    .hidden {
        position: absolute;
        left: 0;
        right: 0;
        clip: rect(0, 0, 0, 0);
    }
`;

export default GlobalStyles;
