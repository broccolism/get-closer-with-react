import { getSocialJwtToken, getEmailJwtToken } from "../jwt";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

const setSocialUserCookie = async (method, userId) => {
  const token = await getSocialToken(userId);
  cookie.set("user", token, { path: "/" });
  cookie.set("signin-method", method, { path: "/" });
};

async function getSocialToken(socialId) {
  const token = await getSocialJwtToken("kakao", socialId);
  return token;
}

const setEmailUserCookie = async (userId) => {
  //   const cookie = new Cookies();
  const token = await getEmailToken(userId);
  cookie.set("user", token, { path: "/" });
  cookie.set("signin-method", "email", { path: "/" });
};

async function getEmailToken(email) {
  const token = await getEmailJwtToken(email);
  return token;
}

export { setSocialUserCookie, setEmailUserCookie };
