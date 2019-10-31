interface KakaoUserParams {
  id: number;
  kakao_account: {
    email: string;
    profile: {
      nickname: string;
      profile_image_url: string;
      thumbnail_image_url: string;
    };
  };
}

export default class KakaoUser implements KakaoUserParams {

  constructor (params: Partial<KakaoUserParams>) {
    Object.assign(this, params);
  }

  id: number;
  kakao_account: { email: string; profile: { nickname: string; profile_image_url: string; thumbnail_image_url: string } };
}