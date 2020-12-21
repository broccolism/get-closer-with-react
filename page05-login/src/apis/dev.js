import { serverUrl } from "../consts/urls";

export const getAllUser = async () => {
  const url = serverUrl + "/user/show-all";
  const options = {
    method: "GET",
    mode: "cors",
  };

  const res = await fetch(url, options);

  const resJson = await res.json();
  console.log(resJson);
  return resJson;
};
