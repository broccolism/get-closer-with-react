import React, { useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import id from "./clientId";

function GoogleSignIn() {
  const [dataFromServer, setDataFromServer] = useState("none");

  function onSignIn(user) {
    console.log(user); // has access token!
    const profile = user.getBasicProfile();
    setDataFromServer(profile);
    console.log(profile);
  }

  function onSignOut() {
    setDataFromServer("none");
    console.log("signed out");
  }
  return dataFromServer === "none" ? (
    <GoogleLogin
      clientId={id}
      onSuccess={(result) => onSignIn(result)}
      onFailure={(result) => console.log(result)}
    />
  ) : (
    <GoogleLogout
      clientId={id}
      buttonText="Logout"
      onLogoutSuccess={onSignOut}
    ></GoogleLogout>
  );
}

export default GoogleSignIn;
