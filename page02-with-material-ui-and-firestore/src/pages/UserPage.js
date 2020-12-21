import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "material-ui-image";
import firestore from "../Firestore";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    textAlign: "center",
  },
  profile: {
    width: "40vw",
    padding: "20vh 20vw 0 20vw",
  },
  title: {
    padding: "2rem 0 1rem",
    color: "#eee",
    backgroundColor: "#000",
    textAlign: "center",
    fontFamily: "Nunito",
    fontSize: "32px",
    fontWeight: "bold",
  },
  photo: {
    width: "60vw",
  },
}));

export default function UserPage({ location }) {
  const classes = useStyles();
  const [user, setUser] = useState([]);

  useEffect(() => {
    firestore
      .collection("DetailUser_backup")
      .doc(location.state.userId)
      .get()
      .then((doc) => {
        const data = doc.data();
        const user = {
          id: data.id,
          nickName: data.nick_name,
          fullName: data.full_name,
          bio: data.bio === "(bio here)" ? " " : data.bio,
          univ: data.univ_data.full_name,
          major: data.major,
          numOfFriends: "N",
          imageUrl: data.original_image_path,
        };
        setUser(user);
      });
  }, []);

  return user === [] ? (
    <div className={classes.title}>
      <div>loading...</div>
    </div>
  ) : (
    <div className={classes.root}>
      <div className={classes.profile}>
        <div className={classes.photo}>
          <Image src={user.imageUrl} cover="true" />
        </div>
      </div>
    </div>
  );
}
