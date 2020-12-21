import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import firestore from "../Firestore";

import UserCard from "./UserCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    alignItems: "center",
  },
  wrapper: {
    display: "block",
    minHeight: "100vh",
  },
  userList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
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
}));

export default function () {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    let users = [];
    firestore
      .collection("DetailUser_backup")
      .orderBy("id", "desc")
      .limit(6)
      .get()
      .then((qs) => {
        qs.docs.map((ds) => {
          const data = ds.data();
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
          console.log(user);
          users.push(user);
        });
      })
      .then(function () {
        setUsers(users);
      });
  }, []);

  return users.length === 0 ? (
    <div className={classes.title} id="user">
      loading..
    </div>
  ) : (
    <div className={classes.root} id="user">
      <div className={classes.wrapper}>
        <div className={classes.title}>Most Outgoing Users TOP 3</div>
        <div className={classes.userList}>
          <UserCard user={users[0]} />
          <UserCard user={users[1]} />
          <UserCard user={users[2]} />
        </div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.title}>Most Introverted Users TOP 3</div>
        <div className={classes.userList}>
          <UserCard user={users[3]} />
          <UserCard user={users[4]} />
          <UserCard user={users[5]} />
        </div>
      </div>
    </div>
  );
}
