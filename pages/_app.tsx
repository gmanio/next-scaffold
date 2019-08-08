import React from 'react';
import App, { AppContext, Container } from 'next/app';
import { isMobile } from '../src/utils/agent';
import { Provider } from 'mobx-react';
import RootStore from '@src/stores';

export default class extends App<{ isMobile: boolean }> {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.

  static async getInitialProps ({ Component, ctx }: AppContext) {
    console.log('App:: getInitialProps');
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, isMobile: isMobile(userAgent) };
  }

  render () {
    const { Component, pageProps, isMobile } = this.props;

    return (
      <Provider {...new RootStore()}>
        <Container>
          <Component {...pageProps} isMobile={isMobile}/>
        </Container>
      </Provider>
    )
  }
}