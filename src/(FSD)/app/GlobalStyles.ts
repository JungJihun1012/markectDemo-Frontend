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
    }
        @font-face {
        font-family: 'GowunDodum-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
        @font-face {
        font-family: 'Interop';
        src: url('https://raw.githubusercontent.com/payw-org/Interop/main/web/fonts/Interop-Regular.woff2')
            format('woff2'),
            url('https://raw.githubusercontent.com/payw-org/Interop/main/web/fonts/Interop-Regular.woff')
            format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: block;
    }
    body {
        min-height: 100vh;
    }
`;