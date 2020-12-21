import { getUserIdByToken } from "../jwt";
import { serverUrl } from "../../consts/urls";

async function getShoppingListByToken(token) {
  const userId = await getUserIdByToken(token);
  const items = await getShoppingListById(userId);
  return items;
}

async function getShoppingListById(id) {
  const url = serverUrl + "/user/shopping-list";
  const options = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      user_id: id,
    }),
  };

  const res = await fetch(url, options);

  const resJson = await res.json();
  return resJson;
}

export { getShoppingListByToken };
