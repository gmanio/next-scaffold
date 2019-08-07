import React from 'react';
import App, { AppContext, Container } from 'next/app';
import * as Styled from '../styles/style';
import { isMobile } from '../src/utils/agent';

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
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Styled.GlobalStyle/>
        <Component {...pageProps} isMobile={this.props.isMobile}/>
      </Container>
    )
  }
}