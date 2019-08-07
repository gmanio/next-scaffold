import React from 'react';

const Index = () => {
  const env = process.env.customKey;
  return (
    <>
      <div>Welcome to mobile Next.js!</div>
    </>
  );
}

Index.getInitialProps = () => {
  console.log('mobile Home');
}

export default Index;