import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        font-family: 'Inter', sans-serif;
    }


    a {
        display: inline-block;
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    } 

    h1, h2, h3, h4, h5, span, p {
        margin: 0;
        padding: 0;
    }
`;
