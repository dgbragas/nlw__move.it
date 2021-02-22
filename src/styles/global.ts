import { createGlobalStyle } from 'styled-components';

const headings = [1, 2, 3, 4, 5, 6].map(number => `h${number}`).join(', ');

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    line-height: 150%;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;

    ::selection {
      background: #5965E0;
      color: #fff;
    }
  }

  ${headings} {
    line-height: 133%;
    margin: 0;
  }

  html, body, #root {
    background-color: #f2f3f5;
    height: 100%;
  }

  body, input, button, textarea {
    font-family: 400 16px "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
