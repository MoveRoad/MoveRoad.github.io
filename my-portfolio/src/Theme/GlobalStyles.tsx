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

    @media (max-width: 768px){
        h1{
            font-size: 25px;
            padding-left: 5px;
        }

        li{
            font-size: 15px;
        }
    }
`;

export default GlobalStyles;
