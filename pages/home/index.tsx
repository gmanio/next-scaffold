import dynamic from 'next/dynamic';
import * as React from 'react';

type Props = {
  pathname: string;
}

class Home extends React.Component<Props> {
  static async getInitialProps ({pathname}) {
    return { pathname };
  }

  render () {
    console.log(this.props);

    // const loader = this.props.isMobile ? () => import(`@src/mobile${this.props.pathname}`) : import(`@src/desktop${this.props.pathname}`);
    const HomeComponent = dynamic(import(`@src/mobile${this.props.pathname}`));

    return (
      <>
        <HomeComponent {...this.props}/>
      </>
    )
  }
}

export default Home;