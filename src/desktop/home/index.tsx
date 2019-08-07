import React from 'react';

const Index = () => {
  return (
    <div>Welcome to Desktop Next.js!</div>
  );
}

Index.getInitialProps = () => {
  console.log('desktop Home');
}

export default Index;