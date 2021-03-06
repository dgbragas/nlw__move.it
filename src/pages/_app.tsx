import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/global';
import initialTheme from '../styles/themes/initial';

export default function App({ Component, pageProps }): JSX.Element {
  return (
    <ThemeProvider theme={initialTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
