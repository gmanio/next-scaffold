import React from 'react';
import App, { AppContext, Container } from 'next/app';
import * as Styled from '../styles/style';

export default class extends App<{ isMobile: boolean }> {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.

  static async getInitialProps ({ Component, ctx, router }: AppContext) {
    console.log('App:: getInitialProps');
    console.log(router);
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const isMobile = false;
    return { pageProps, isMobile };
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