type KakaoUserParams = {
  id: number;
  kakao_account: {
    email: string;
    profile: {};
  };
}

export default class KakaoUser {
  constructor (params: Partial<KakaoUserParams>) {
    Object.assign(this, params);
  }
}