import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello</h1>
        <Button>Click this</Button>
        <Button secondary>or this</Button>
      </>

    </ThemeProvider>
  </div>
);

export default Root;
