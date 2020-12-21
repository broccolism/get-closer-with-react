import { serverUrl } from "../consts/urls";

const getSocialJwtToken = async (method, id) => {
  const url = serverUrl + "/signin/social";
  const options = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      method: method,
      social_id: id,
    }),
  };

  const res = await fetch(url, options);

  const resJson = await res.json();
  return resJson.token;
};

const getEmailJwtToken = async (email) => {
  const url = serverUrl + "/signin/email";
  const options = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      method: "email",
      email: email,
    }),
  };

  const res = await fetch(url, options);

  const resJson = await res.json();
  return resJson.token;
};

const getUserIdByToken = async (token) => {
  const url = serverUrl + "/user/verify";
  const options = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({ token: token }),
  };

  const res = await fetch(url, options);
  const resJson = await res.json();

  return resJson.userId;
};

export { getSocialJwtToken, getEmailJwtToken, getUserIdByToken };
