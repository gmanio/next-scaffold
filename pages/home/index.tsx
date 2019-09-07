import dynamic from 'next/dynamic';
import * as React from 'react';

type Props = {
  pathname: string;
}

class Home extends React.Component<Props> {
  static async getInitialProps (props) {
    console.log('Home:: getInitialProps');

    return { pathname: props.pathname };
  }

  render () {
    // const isMobile: boolean = window ? window.isMobile ? true : false : false;

    const loader = true ? () => import(`@src/mobile${this.props.pathname}`) : import(`@src/desktop${this.props.pathname}`);
    const HomeComponent = dynamic(loader);

    return (
      <>
        <HomeComponent {...this.props}/>
      </>
    )
  }
}

export default Home;