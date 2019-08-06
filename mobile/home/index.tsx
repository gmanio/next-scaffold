import React from 'react';

const Index = () => {
  const env = process.env.customKey;
  return (
    <>
      {env}
      <div>Welcome to mobile Next.js!</div>
    </>
  );
}

Index.getInitialProp = () => {
  console.log('Index');
}

export default Index;