import React from 'react';
import { inject, observer } from 'mobx-react';

const Index = (props: any) => {
  debugger;
  console.log(props);
  console.log(process);
  const env = process.env.customKey;
  return (
    <>
      <div>Welcome to mobile Next.js! {env}</div>
    </>
  );
}

export default inject((store)=>{UserStore: store})(observer(Index));