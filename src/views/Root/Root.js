import React from 'react';
import Button from 'components/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello</h1>
    <Button>Click this</Button>
    <Button secondary>or this</Button>
  </div>
);

export default Root;
