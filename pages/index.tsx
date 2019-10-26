import * as React from 'react';
import KakaoUser from '../models/KakaoUser';

export default class extends React.PureComponent {
  static async getInitialProps () {
    console.log('getInitialProps');
  }

  state: {
    kakao_access_token: '',
    user: {}
  }

  componentDidMount () {
    window.Kakao.init('');
    // window.Kakao.Auth.getStatusInfo((res) => {
    //   console.log(res);
    // });
    window.Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: (authObj) => {
        this.setState({ kakao_access_token: authObj.access_token });
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: (res) => {
            console.log(res);
            const user = new KakaoUser(res);
            this.setState({ user: user });
          },
          fail: (error) => {
            alert(JSON.stringify(error));
          }
        });
      },
      fail: (err) => {
        alert(JSON.stringify(err));
      }
    });
  }

  handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const status = await window.Kakao.Auth.getStatusInfo();
    console.log(status);
    debugger;
  }

  render () {
    return (
      <>
        <a id={'kakao-login-btn'} onClick={this.handleLogin}>로그인 버튼</a>
        <a href={'http://developers.kakao.com/logout'}></a>
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