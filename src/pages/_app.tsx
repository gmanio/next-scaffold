import React from 'react';
import App, { AppContext, Container } from 'next/app';
import { Provider } from 'mobx-react';
import RootStore from '@src/stores';
import { isMobile } from '@src/utils/agent';
import { MobileGlobalStyle } from '@src/mobile/GlobalStyle';
import { DesktopGlobalStyle } from '@src/desktop/GlobalStyle';

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
          <Container>
            <Component {...pageProps}/>
          </Container>
        </Provider>
      </>
    )
  }
}