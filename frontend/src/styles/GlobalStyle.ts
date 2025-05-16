import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui;
    font-weight: 500;
    font-style: normal;
  }

  body {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.typography.colors.dark};
  }

  .main { 
    min-height: 100vh;
    height: 100%;
  }

  h1 { font-size: 40px; }
  h2 { font-size: 30px; }
  h3 { font-size: 25px; }
  h4 { font-size: 20px; }
  h5 { font-size: 17px; }
  h6 { font-size: 14px; }
`;
