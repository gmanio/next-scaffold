import * as React from 'react';

export default class extends React.PureComponent {
  static async getInitialProps () {
    console.log('getInitialProps');
  }

  render () {
    return (
      <>
        한글 폰트 테스트
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="hosted_button_id" value="CFDHWT3YASAFS"/>
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
          <img alt="" src="https://www.paypalobjects.com/ko_KR/i/scr/pixel.gif" width="1" height="1"/>
        </form>
      </>
    )
  }
}