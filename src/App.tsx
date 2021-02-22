import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';

import GlobalStyles from './styles/global';
import initialTheme from './styles/themes/initial';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={initialTheme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
}
