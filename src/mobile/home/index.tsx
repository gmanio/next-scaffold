import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

const Index = (props: any) => {
  useEffect(() => {
    props.userStore.fetchUsers();
  }, []);

  useEffect(() => {
    console.log(props.userStore.users);
  }, [props.userStore.users]);
  // props.store.userStore.fetchUsers();

  console.log(props);
  console.log(process);
  const env = process.env.customKey;
  return (
    <>
      {}
      <div>Welcome to mobile Next.js! {env}</div>
    </>
  );
}

export default inject(({ userStore }) => userStore)(observer(Index));