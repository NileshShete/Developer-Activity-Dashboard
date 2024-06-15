import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
  }

  .App {
    text-align: center;
  }

  .App-header {
    background-color: #282c34;
    padding: 20px;
    color: white;
  }

  main {
    padding: 20px;
  }
`;

export default GlobalStyles;
