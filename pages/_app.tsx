import React from 'react';
import App, { AppContext, Container } from 'next/app';
import { Provider } from 'mobx-react';
import RootStore from '@src/stores';

type Props = {
  isMobile: boolean;
}

export default class extends App<Props> {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.

  static async getInitialProps ({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Provider {...new RootStore()}>
        <Container>
          <Component {...pageProps}/>
        </Container>
      </Provider>
    )
  }
}