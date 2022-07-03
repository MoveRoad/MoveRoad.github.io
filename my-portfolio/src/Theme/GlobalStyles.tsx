import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html, body, div, p {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    p {
        margin: 5px 0;
    }

    li {
        margin: 10px 0;
    }
`;

export default GlobalStyles;
