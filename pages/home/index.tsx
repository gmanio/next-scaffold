import dynamic from 'next/dynamic';
import * as React from 'react';
import { inject, observer } from 'mobx-react';

type Props = {
  isMobile: boolean;
  path: string
}

class Home extends React.Component<Props> {
  static async getInitialProps (props: any) {
    const path = props.pathname;

    return { path };
  }

  render () {
    const loader = this.props.isMobile ? () => import(`@src/mobile${this.props.path}`) : import(`@src/desktop${this.props.path}`);
    const HomeComponent = dynamic(loader);

    return (
      <>
        <HomeComponent {...this.props}/>
      </>
    )
  }
}

export default inject((store) => store)(observer(Home));