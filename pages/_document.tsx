import React from 'react';
import Document, { Html, Main, NextScript, DocumentContext, Head } from 'next/document';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Merriweather", serif;
    font-size: 1.6em;
    line-height: 1.6;
  }
`;


export default class extends Document<{ styleTags }> {
  static async getInitialProps (ctx: DocumentContext) {
    console.log('Document:: getInitialProps');
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render () {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
          <meta name="description" content="신선 식재료, 포장용기, 배달비품 전문 쇼핑몰, 배민상회입니다. 톡톡튀는 배민 디자인 제품과 품질로 엄선한 기성품을 특별 할인가로 만나보세요."/>
          <meta name="keywords" content="식재료, 가공 식재료, 닭고기, 소스, 플라스틱 용기, 비닐, 수저, 실링용기, 치킨박스, 피자박스, 도시락/반찬용기"/>
          <meta name="naver-site-verification" content="5b135fdbe175231fdfc9b895e54dfaab67a0440d"/>
          <meta property="og:site_name" content="배민상회"/>
          <meta property="og:type" content="website"/>
          <meta property="og:description" content="신선 식재료, 포장용기, 배달비품 전문 쇼핑몰, 배민상회입니다. 톡톡튀는 배민 디자인 제품과 품질로 엄선한 기성품을 특별 할인가로 만나보세요."/>
          <meta property="og:url" content="https://mart.baemin.com"/>
          <meta property="og:image" content="https://cdn-mart.baemin.com/front-end/assets-static/og-image-logo.jpg"/>
          <link rel="shortcut icon" href="https://cdn-mart.baemin.com/front-end/assets-static/favicon-new.ico"/>
          <link rel="icon" href="https://cdn-mart.baemin.com/front-end/assets-static/favicon-new.ico"/>
          <link rel="apple-touch-icon" href="https://cdn-mart.baemin.com/front-end/assets-static/touch-icon.png"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
};