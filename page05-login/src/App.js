import "./App.css";
import { useState, useEffect } from "react";
import { withCookies, useCookies } from "react-cookie";

import { Route, Redirect } from "react-router-dom";
import { Home, StartSignIn, KakaoSignUpMore } from "./pages";

import { getAllUser } from "./apis/dev";

function App() {
  const [testData, setTestData] = useState("none");
  const getData = async () => {
    const data = await getAllUser();
    console.log(data);
    setTestData(data[0]);
  };
  const [cookies] = useCookies(["user"]);
  const [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    if (cookies.user && cookies.user !== "undefined") {
      setHasCookie(true);
    }
  }, [cookies]);

  return (
    <>
      <div onClick={getData}>GET DATA</div>
      {testData === "none" ? <div>NONE</div> : <div>{testData.email}</div>}
      {!hasCookie ? <Redirect to="/signin" /> : <Redirect to="/" />}
      <Route
        exact
        path="/"
        render={() => {
          return <Home />;
        }}
      />
      <Route exact path="/signin" component={StartSignIn} />
      {/* <Route
        exact
        path="/signin"
        render={(routerProps) => {
          return (
            <StartSignIn
              {...routerProps}
              setHasCookie={setHasCookie}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          );
        }}
      /> */}
      <Route exact path="/signup/kakao/more" component={KakaoSignUpMore} />
    </>
  );
}

export default withCookies(App);
