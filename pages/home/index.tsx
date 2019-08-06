import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import * as React from 'react';

// const DynamicComponent = (componentUrl: string) => dynamic(() => import(componentUrl));
const getLoader = (sUrl) => () => import(sUrl);

export const Home = (props: any) => {
  const router = useRouter();
  const path = router.pathname;
  console.log(props);
  const componentUrl = props.isMobile ? `../../mobile${path}` : `../../desktop${path}`;
  console.log(componentUrl);
  const HomeComponent = dynamic(getLoader(componentUrl));

  return (<HomeComponent/>)
}

export default Home;