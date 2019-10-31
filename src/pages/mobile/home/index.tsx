import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import UserCard from '../../../components/UserCard';
import UserSelector from '../../../containers/UserSelector';

const Index = ({ userStore }) => {
  const fetchUsers = () => userStore.fetchUsers();
  console.log(process);
  const env = process.env.customKey;

  // componentDidMount
  useEffect(() => {
    userStore.fetchUsers();
  }, []);

  useEffect(() => {
    console.log(userStore.users);
  }, [userStore.users]);


  return (
    <>
      <UserSelector/>
      <button onClick={fetchUsers}>fetch</button>
      <span>{userStore.users.map((user) => (user.name))}</span>
      <div>Welcome to mobile Next.js! {env}</div>
      <UserCard/>
    </>
  );
}

export default inject('userStore')(observer(Index));