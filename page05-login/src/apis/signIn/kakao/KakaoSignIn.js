import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { checkUserSocialSignedUp } from "../../signUp";
import { setSocialUserCookie } from "../cookie";

const kakao = window.Kakao;
const KakaoSignIn = () => {
  const [dataFromServer, setDataFromServer] = useState("none");
  const history = useHistory();

  const goSignUpKakao = (user) => {
    history.push({
      pathname: "/signup/kakao/more",
      state: user,
    });
  };

  const signInKakao = () => {
    getKakaoProfile().then(async (res) => {
      console.log("DATA from SERVER: ", res);
      const kakaoUserID = res.id;

      const userExists = await checkUserSocialSignedUp("kakao", kakaoUserID);

      if (!userExists) {
        const kakaoNickname = res.properties.nickname;
        const kakaoProfileImage = res.properties.profile_image;
        const user = {
          social_id: kakaoUserID,
          name: kakaoNickname,
          image: kakaoProfileImage,
        };
        goSignUpKakao(user);
      } else {
        try {
          await setSocialUserCookie("kakao", kakaoUserID);
          window.location.reload();
        } catch (err) {
          alert("로그인에 실패했습니다.");
          console.error("login FAILED: ", err);
        }
      }
    });
  };

  const getKakaoProfile = () => {
    try {
      return new Promise((resolve, reject) => {
        if (!kakao) {
          reject("Kakao 인스턴스가 없음");
        }
        kakao.Auth.login({
          success: (auth) => {
            kakao.API.request({
              url: "/v2/user/me",
              success: (res) => {
                resolve(res);
              },
              fail: (err) => {
                console.error(err);
              },
            });
          },
          fail: (err) => {
            console.error(err);
          },
        });
      });
    } catch (err) {
      console.error(err);
    }
  };

  return dataFromServer === "none" ? (
    <StyledButton onClick={signInKakao}>카카오 로그인</StyledButton>
  ) : (
    <StyledButton>이거 보이면 안되는데..</StyledButton>
  );
};

const StyledButton = styled.div`
  padding: 0;
  margin-bottom: 8px;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default KakaoSignIn;
