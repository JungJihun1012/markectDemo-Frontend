import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        color: inherit;
        outline: none;
        background: transparent;
        border: none;
    }
        @font-face {
        font-family: 'GowunDodum-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    body {
        min-height: 100vh;
    }
`;