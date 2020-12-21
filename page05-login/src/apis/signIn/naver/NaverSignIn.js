import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { webUrl } from "../../../consts/urls";

const NaverSignIn = () => {
  const [dataFromServer, setDataFromServer] = useState("none");
  const getNaverProfile = () => {
    window.location.href.includes("access_token") && getProfile();

    function getProfile() {
      naverLogin.getLoginStatus((status) => {
        if (status) {
          console.log(status);
          const email = naverLogin.user.getEmail();
          if (email === undefined || email === null) {
            alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
            /* 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
            naverLogin.reprompt();
            return;
          }
          setDataFromServer(naverLogin.user);
          console.log(naverLogin.user);
        } else {
          console.log("failed to process callback");
        }
      });
    }
  };

  const initNaver = () => {
    naverLogin.init();
    console.log("naver login init done!");
    getNaverProfile();
  };

  const signOutNaver = () => {
    naverLogin.getLoginStatus((status) => {
      if (status) {
        setDataFromServer("none");
        console.log("네이버 로그아웃 완료");
        window.location.replace(webUrl + "/signin");
      }
    });
  };

  useEffect(initNaver, []);

  return dataFromServer === "none" ? (
    <div id="naverIdLogin"></div>
  ) : (
    <StyledButton onClick={signOutNaver}>네이버 로그아웃</StyledButton>
  );
};

const naverLogin = new window.naver.LoginWithNaverId({
  clientId: "sp1YaWyrzI0XQFOjauZc",
  callbackUrl: `${webUrl}/signin`,
  loginButton: {
    color: "green",
    type: 3,
    height: 48,
  },
});

const StyledButton = styled.div`
  padding: 0;
  margin-bottom: 8px;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #fff;
  background-color: #1bc801;
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

export default NaverSignIn;
