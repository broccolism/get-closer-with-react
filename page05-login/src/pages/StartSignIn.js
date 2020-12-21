import React from "react";
import kakaoIcon from "../apis/signIn/icons/죠르디.png";
import naverIcon from "../apis/signIn/icons/naver.svg";
import googleIcon from "../apis/signIn/icons/google.png";
import firebaseIcon from "../apis/signIn/icons/firebase.png";

import KakaoSignIn from "../apis/signIn/kakao/KakaoSignIn";
import NaverSignIn from "../apis/signIn/naver/NaverSignIn";
import GoogleSignIn from "../apis/signIn/google/GoogleSignIn";
import EmailSignIn from "../apis/signIn/email/EmailSignIn";

function StartSignIn({ setCookie, setHasCookie }) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>{dataFromServer}</div> */}
        <div className="Login-block">
          <img src={kakaoIcon} className="Kakao-logo" alt="logo" />
          <KakaoSignIn setHasCookie={setHasCookie} setCookie={setCookie} />
        </div>
        <div className="Login-block">
          <img src={naverIcon} className="Naver-logo" alt="logo" />
          <NaverSignIn />
        </div>
        <div className="Login-block">
          <img src={googleIcon} className="Google-logo" alt="logo" />
          <GoogleSignIn />
        </div>
        <div className="Login-block">
          <img src={firebaseIcon} className="Firebase-logo" alt="logo" />
          <EmailSignIn />
        </div>
      </header>
    </div>
  );
}

export default StartSignIn;
