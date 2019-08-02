import React from 'react';
import App, { AppContext, Container } from 'next/app';
import { UserAgent, UserAgentProvider } from '@quentin-sommer/react-useragent'

interface Props {
  userAgent: string
}

export default class extends App<Props> {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.

  static async getInitialProps ({ Component, ctx }: AppContext) {
    let pageProps = {};

    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, userAgent };
  }

  render () {
    const { Component, pageProps, userAgent } = this.props;

    // return (
    //   <UserAgentProvider ua={userAgent}>
    //     <UserAgent mobile>
    //       <p>This will only be rendered on mobile</p>
    //     </UserAgent>
    //     <UserAgent computer>
    //       <p>This will only be rendered on desktop</p>
    //     </UserAgent>
    //   </UserAgentProvider>

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}