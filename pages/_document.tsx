import React from 'react';
import Document, { Html, Main, NextScript, DocumentContext, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { isMobile } from '@src/utils/agent';

export default class extends Document<{ isMobile: boolean, styleTags }> {
  static async getInitialProps (ctx: DocumentContext) {
    console.log('Document:: getInitialProps');

    const originalRenderPage = ctx.renderPage;
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;
    const sheet = new ServerStyleSheet();

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props}/>)
      });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        isMobile: isMobile(userAgent),
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <>
        {this.props.isMobile ? (
          <Html>
            <Head>
              <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
              <link rel="shortcut icon" href="https://cdn-mart.baemin.com/front-end/assets-static/favicon-new.ico"/>
              <link rel="icon" href="https://cdn-mart.baemin.com/front-end/assets-static/favicon-new.ico"/>
              <link rel="apple-touch-icon" href="https://cdn-mart.baemin.com/front-end/assets-static/touch-icon.png"/>
              <script>
                window.isMobile = {this.props.isMobile.toString()};
              </script>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
          </Html>
        ) : (
          <Html>
            <Head>
              <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
              <link rel="shortcut icon" href="https://cdn-mart.baemin.com/front-end/assets-static/favicon-new.ico"/>
              <link rel="icon" href="https://cdn-mart.baemin.com/front-end/assets-static/favicon-new.ico"/>
              <link rel="apple-touch-icon" href="https://cdn-mart.baemin.com/front-end/assets-static/touch-icon.png"/>
              <script>
                window.isMobile = {this.props.isMobile.toString()};
              </script>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
          </Html>
        )}
      </>
    )
  }
};