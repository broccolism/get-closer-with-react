import React, { useState } from "react";
import { Cookies } from "react-cookie";
import signOut from "../apis/signOut";
import { getShoppingListByToken } from "../apis/user/shoppingList";

function Home() {
  const [shoppinglist, setShoppinglist] = useState({
    gotItems: false,
    items: [],
  });
  const cookie = new Cookies();
  const token = cookie.get("user");
  const method = cookie.get("signin-method");

  const getShoppingList = async () => {
    const list = await getShoppingListByToken(token);
    setShoppinglist({
      gotItems: true,
      items: list.items,
    });
  };

  const showShoppingList = () => {
    const divs = shoppinglist.items.map((item, index) => (
      <li key={index}>
        {item.item_name}, {item.item_count}개
      </li>
    ));
    return <ul>{divs}</ul>;
  };
  return (
    <div>
      <h1>HOME</h1>
      <h2 onClick={signOut}>로그아웃</h2>
      <div>method: {method}</div>
      <div>token: {token}</div>
      <h2 onClick={getShoppingList}>쇼핑 리스트</h2>
      {shoppinglist.gotItems ? (
        showShoppingList()
      ) : (
        <div>아직 안 불러왔네요</div>
      )}
    </div>
  );
}

export default Home;
