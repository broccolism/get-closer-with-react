import React, { useState } from "react";
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";
import { checkUserEmailSignedUp, addUserEmailSignUp } from "../../signUp";
import { setEmailUserCookie } from "../cookie";
import "../../../App.css";
import bcrypt from "bcryptjs";

function EmailSignIn() {
  const [nicknameJoin, setNicknameJoin] = useState("");
  const [emailJoin, setEmailJoin] = useState("");
  const [passwordJoin, setPasswordJoin] = useState("");
  const [errorJoin, setErrorsJoin] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const alreadySignedUp = await checkUserEmailSignedUp(emailJoin);

    if (!alreadySignedUp) {
      setErrorsJoin("");
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailJoin, passwordJoin)
        .then(async (res) => {
          setErrorsJoin("");
          const encryptedPw = await getEncryptedPw();
          const user = {
            name: nicknameJoin,
            email: emailJoin,
            pw: encryptedPw,
            // pw: passwordJoin,
            method: "email",
          };
          const suceed = await addUserEmailSignUp(user);
          if (suceed) {
            window.location.reload();
            window.alert("가입 완료!");
          } else {
            console.log("err while adding user signed up with email");
          }
        })
        .catch((e) => {
          console.log(e);
          setErrorsJoin(e.toString());
        });
    } else {
      setErrorsJoin("당신은 이미 가입했습니다. 돌아가!");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        if (res.user) {
          setErrors("");
          await setEmailUserCookie(email);
          window.location.reload();
        }
      })
      .catch((e) => {
        setErrors(e.toString());
      });
  };

  async function getEncryptedPw() {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const encryptedPw = await bcrypt.hash(password, salt);
    return encryptedPw;
  }

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setIsSignedIn(false);
        console.log("signed out firebase");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <>
      <form onSubmit={(e) => handleSignUp(e)}>
        <input
          className="Big-text"
          value={nicknameJoin}
          onChange={(e) => setNicknameJoin(e.target.value)}
          name="join-nickname"
          type="nickname"
          placeholder="nickname"
        />
        <input
          className="Big-text"
          value={emailJoin}
          onChange={(e) => setEmailJoin(e.target.value)}
          name="join-email"
          type="email"
          placeholder="email"
        />
        <br />
        <input
          className="Big-text"
          onChange={(e) => setPasswordJoin(e.target.value)}
          name="join-password"
          value={passwordJoin}
          type="password"
          placeholder="password"
        />
        <br />
        <button className="Big-text" type="submit">
          JOIN
        </button>
        <div className="Email-error">{errorJoin}</div>
      </form>
      {!isSignedIn ? (
        <form onSubmit={(e) => handleSignIn(e)}>
          <input
            className="Big-text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="email"
          />
          <br />
          <input
            className="Big-text"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
            type="password"
            placeholder="password"
          />
          <br />
          <button className="Big-text" type="submit">
            SIGN IN
          </button>
          <div className="Email-error">{error}</div>
        </form>
      ) : (
        <button onClick={handleSignOut}>SIGN OUT</button>
      )}
    </>
  );
}

export default EmailSignIn;
