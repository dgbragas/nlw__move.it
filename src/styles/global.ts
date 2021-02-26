import { createGlobalStyle } from 'styled-components';

const headings = [1, 2, 3, 4, 5, 6].map(number => `h${number}`).join(', ');

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    line-height: 150%;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;

    ::selection {
      background: ${({ theme: { colors } }) => colors.blue};
      color: ${({ theme: { colors } }) => colors.white};
    }
  }

  ${headings} {
    line-height: 133%;
    margin: 0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html, body, #__next {
    background-color: ${({ theme: { colors } }) => colors.background};
    color: ${({ theme: { colors } }) => colors.text};
    min-height: 100vh;
  }

  body, input, button, textarea {
    font-family: 400 1rem "Inter", sans-serif;
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
