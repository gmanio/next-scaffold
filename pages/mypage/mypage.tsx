import * as React from 'react';
import { getData } from '../../utils/api';

const MyPage = (props: any) => {
  console.log(props);

  return (
    <div>
      {'dsfsf'}
    </div>
  );
}

MyPage.getInitialProps = async () => {
  const data = await getData();

  return data;
};

export default MyPage;