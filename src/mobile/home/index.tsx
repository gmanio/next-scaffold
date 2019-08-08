import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

const Index = ({ userStore }) => {
  console.log(process);
  const env = process.env.customKey;

  // componentDidMount
  useEffect(() => {
    userStore.fetchUsers();
  }, []);

  useEffect(() => {
    console.log(userStore.users);
    debugger;
  }, [userStore.users]);


  return (
    <>
      <span>{userStore.users.map((user) => (user.name))}</span>
      <div>Welcome to mobile Next.js! {env}</div>
    </>
  );
}

export default inject('userStore')(observer(Index));