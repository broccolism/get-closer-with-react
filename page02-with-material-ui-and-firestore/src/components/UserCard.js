import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Image from "material-ui-image";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    background: "rgba(0, 0, 0, 0.5)",
    margin: "20px",
    cursor: "pointer",
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
  },
  photo: {
    width: 300,
    height: "auto",
  },
  nickName: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "1.3rem",
    color: "#fff",
  },
  bio: {
    fontFamily: "Nunito",
    fontSize: "0.5rem",
    color: "#ddd",
  },
});

export default function UserCard({ user }) {
  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
  });

  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{
        pathname: `/user/${user.nickName}`,
        state: {
          userId: user.id,
        },
      }}
    >
      <Card
        className={classes.root}
        classes={{ root: state.raised ? classes.cardHovered : "" }}
        onMouseOver={() => setState({ raised: true })}
        onMouseOut={() => setState({ raised: false })}
        onClick={() => {
          console.log("hi");
        }}
        raised={state.raised}
      >
        <div className={classes.photo}>
          <Image src={user.imageUrl} cover="true" />
        </div>
        <CardContent>
          <Typography
            className={classes.nickName}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {user.nickName}
          </Typography>
          <Typography
            className={classes.bio}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Full Name: {user.fullName}
          </Typography>
          <Typography
            className={classes.bio}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            From: {user.univ}
          </Typography>
          <Typography
            className={classes.bio}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Majoring: {user.major}
          </Typography>

          <Typography
            className={classes.bio}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Having {user.numOfFriends} Friends
          </Typography>
          <Typography
            className={classes.bio}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {user.bio}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
