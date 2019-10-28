import React from 'react';
import { inject, observer } from 'mobx-react';

const Index = () => {
  return (
    <div>Welcome to Desktop Next.js!</div>
  );
}

Index.getInitialProps = () => {
  console.log('desktop Home');
}

export default inject('userStore')(observer(Index));