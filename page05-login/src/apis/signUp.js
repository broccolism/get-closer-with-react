import { serverUrl } from "../consts/urls";

const checkUserSocialSignedUp = async (method, id) => {
  const url = serverUrl + "/signup/social/exists";
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
  return resJson.exists;
};

const checkUserEmailSignedUp = async (email) => {
  const url = serverUrl + "/signup/email/exists";
  const options = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      email: email,
    }),
  };

  const res = await fetch(url, options);

  const resJson = await res.json();
  return resJson.exists;
};

const addUserSocialSignUp = async (user) => {
  const url = serverUrl + "/signup/social/add";
  const options = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      name: user.nickname,
      image_url: user.image_url,
      method: user.method,
      social_id: user.social_id,
      email: user.email,
    }),
  };

  const res = await fetch(url, options);

  const resJson = await res.json();
  return resJson.done;
};

const addUserEmailSignUp = async (user) => {
  const url = serverUrl + "/signup/email/add";
  const options = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      name: user.nickname,
      method: user.method,
      email: user.email,
      pw: user.pw,
    }),
  };

  const res = await fetch(url, options);

  const resJson = await res.json();
  return resJson.done;
};
export {
  checkUserSocialSignedUp,
  addUserSocialSignUp,
  checkUserEmailSignedUp,
  addUserEmailSignUp,
};
