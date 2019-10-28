import React from 'react';
import App, { AppContext } from 'next/app';
import { Provider } from 'mobx-react';
import { isMobile } from '../utils/agent';
import { MobileGlobalStyle } from './mobile/GlobalStyle';
import { DesktopGlobalStyle } from './desktop/GlobalStyle';
import RootStore from '../stores';

export default class extends App<any> {
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
      <>
        {isMobile ? <MobileGlobalStyle/> : <DesktopGlobalStyle/>}
        <Provider {...new RootStore()}>
          <Component {...pageProps}/>
        </Provider>
      </>
    )
  }
}