import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import * as React from 'react';
import DesktopHome from '@src/desktop/home';

// export default class Home extends React.PureComponent {
//   getInitialProps () {
//     debugger;
//   }
//
//   render () {
//     return (<></>)
//   }
// }

export const Home = (props: any) => {
  debugger;
  const router = useRouter();
  const path = router.pathname;
  const loader = props.isMobile ? () => import(`../../src/mobile${path}`) : import(`../../src/desktop${path}`);
  const HomeComponent = dynamic(loader);

  return (
    <>
      <DesktopHome/>
      <HomeComponent {...props}/>
    </>
  )
}

Home.getInitialProps = async () => {
  console.log('Home InitialProps');
}

export default Home;