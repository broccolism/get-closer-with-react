import React, { useState } from "react";
import { addUserSocialSignUp } from "../apis/signUp";
import { webUrl } from "../consts/urls";
import "../App.css";

function KakaoSignUpMore(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [doneSignUp, setDone] = useState(false);

  const kakaoUser = props.history.location.state;
  const kakaoUserId = kakaoUser.social_id;
  const kakaoProfileImage = kakaoUser.image;
  const kakaoNickname = kakaoUser.nickname;

  const handleJoin = async (e) => {
    e.preventDefault();
    if (email.includes("@") && email.includes(".") && email.length > 6) {
      setError("");
      const user = {
        name: kakaoNickname,
        image_url: kakaoProfileImage,
        method: "kakao",
        social_id: kakaoUserId,
        email: email,
      };

      var added = await addUserSocialSignUp(user);

      if (added) {
        setDone(added);
        window.location.replace(webUrl + "/signin");
      } else {
        console.log("add user social sign up FAILED");
      }
    } else {
      setError("이메일 주소가 이상해요");
    }
  };

  return (
    <div>
      <img src={kakaoProfileImage} />
      <h1>{kakaoNickname}님, 안녕하세요!</h1>
      <div>당신을 좀 더 알고 싶어요. 🧐</div>
      <form onSubmit={(e) => handleJoin(e)}>
        <input
          className="Big-text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="Join-email"
          type="email"
          placeholder="이메일 주소 치는 곳"
        />
        <br />
        <button className="Big-text" type="submit">
          가입하기!
        </button>
        <div>{error}</div>
      </form>
      {doneSignUp ? <h3>🥳가입 완료!🥳</h3> : <></>}
    </div>
  );
}

export default KakaoSignUpMore;
