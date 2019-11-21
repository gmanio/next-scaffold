import * as React from 'react';
import KakaoUser from '../models/KakaoUser';
import { ChangeEvent } from 'react';

export default class extends React.PureComponent {
  static async getInitialProps () {
    console.log('getInitialProps');
  }

  public inputRef = React.createRef<HTMLInputElement>();
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
            const email = user.kakao_account.email;
            console.log(email);
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
  }

  handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const stringNumbers = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
    const unitNumbers = ['', '십', '백', '천', '', '십', '백', '천', '', '십', '백', '천', '', '십', '백', '천'];
    const data = e.currentTarget.value.split('');
    let korean = '';

    for (const [index, value] of data.reverse().entries()) {
      const koreanNumber = stringNumbers[Number(value)];
      console.log(index, value, stringNumbers[Number(value)]);
      let concatString = '';
      if (koreanNumber !== '') {
        concatString = (koreanNumber + unitNumbers[index]);
      }
      if (index == 4) {
        concatString += '만';
      }
      if (index == 8) {
        concatString += '억';
      }
      if (index == 12) {
        concatString += '조';
      }
      korean = concatString + korean;
      // concatString += stringNumbers[Number(value)];
    }

    console.log(korean + '원');
    // function numberWithCommas (x) {
    //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // }

    // const sNumber = numberWithCommas(data);
    // const arrNumber = sNumber.split(',');
    // console.log(arrNumber);
    // for (const unit of arrNumber) {
    //   const arrUnit = unit.split('');
    //   for (const number of arrUnit) {
    //
    //   }
    // }

    // 10,000 일십만원

    console.log(e);
    console.log(e.currentTarget.value);
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

        <input ref={this.inputRef} defaultValue={'1000'} onChange={this.handleInput}/>
      </>
    )
  }
}
