import { Cookies } from "react-cookie";
const kakao = window.Kakao;

const signOut = () => {
  const cookie = new Cookies();
  const method = cookie.get("signin-method");
  if (method === "kakao") {
    signOutKaKao();
  }
  cookie.remove("user");
  cookie.remove("signin-method");
  window.location.reload();
};

function signOutKaKao() {
  if (kakao.Auth.getAccessToken()) {
    console.log("카카오 인증 엑세스 토큰 존재", kakao.Auth.getAccessToken());
    kakao.Auth.logout(() => {
      console.log("카카오 로그아웃 완료!");
    });
  } else {
    console.log("카카오 로그아웃: 엑세스 토큰 없음");
  }
}

export default signOut;
