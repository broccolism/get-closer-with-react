const express = require("express");
const router = express.Router();
const api = require("../apis/database.js");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwtKey");
const secret_key = jwtConfig.key;
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.post("/test", (req, res, next) => {
  db.query("SELECT * FROM user", (error, rows) => {
    if (error) throw error;
    console.log("User info is: ", rows[0].name);
    res.header("Access-Control-Allow-Origin", "*");
    res.json({ testMsg: rows[0] });
  });
});

router.post("/signup/phone-number-and-name/exists", async (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const result = await api.isUserExistsByNameAndPhoneNumber(name, phone);

  res.header("Access-Control-Allow-Origin", "*");
  res.json(result);
});

router.post("/signup/social/exists", async (req, res, next) => {
  const method = req.body.method;
  const client_id = req.body.client_id;
  const exists = await api.isSocialUserExists(method, client_id);

  res.header("Access-Control-Allow-Origin", "*");
  res.json({ exists: exists });
});

router.post("/signup/email/exists", async (req, res, next) => {
  const email = req.body.email;
  const exists = await api.isEmailUserExists(email);
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ exists: exists });
});

router.post("/signup/code/validation", async (req, res, next) => {
  const code = req.body.code;
  const result = await api.getCodeGroupAndIdByCode(code);
  res.header("Access-Control-Allow-Origin", "*");
  res.json(result);
});

router.post("/signup/social/add", async (req, res, next) => {
  const user = req.body;
  const added = await api.addSocialUser(user);
  if (added === true) {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({ done: true });
  } else {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({ done: false });
  }
});

router.post("/signup/email/add", async (req, res, next) => {
  const user = req.body;
  const added = await api.addEmailUser(user);
  if (added === true) {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({ done: true });
  } else {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({ done: false });
  }
});

router.post("/signin/social", (req, res, next) => {
  try {
    const client_id = req.body.client_id;
    const method = req.body.method;
    console.log(req.body);
    const token = jwt.sign(
      {
        method: method,
        client_id: client_id,
      },
      secret_key,
      { expiresIn: "6h" }
    );

    res.header("Access-Control-Allow-Origin", "*");
    res.cookie("user", token);
    res.json({
      token: token,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/signin/email", (req, res, next) => {
  try {
    const method = req.body.method;
    const email = req.body.email;

    const token = jwt.sign(
      {
        method: method,
        email: email,
      },
      secret_key,
      { expiresIn: "6h" }
    );

    res.header("Access-Control-Allow-Origin", "*");
    res.cookie("user", token);
    res.json({
      token: token,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/signin/find-id", async (req, res, next) => {
  try {
    const user = req.body;
    const name = user.name;
    const phone = user.phone;

    const result = await api.getUserEmailByNameAndPhoneNumber(name, phone);
    res.header("Access-Control-Allow-Origin", "*");
    res.json(result);
  } catch (err) {
    console.log("find user id failed: ", err);

    res.header("Access-Control-Allow-Origin", "*");
    res.status(400);
  }
});

router.post("/signin/find-pw/find-user", async (req, res, next) => {
  try {
    const user = req.body;
    const name = user.name;
    const phone = user.phone;
    const email = user.email;

    const result = await api.isUserExistsToChangePw(name, phone, email);
    res.header("Access-Control-Allow-Origin", "*");
    res.json(result);
  } catch (err) {
    console.log("find user to change pw failed: ", err);

    res.header("Access-Control-Allow-Origin", "*");
    res.status(400);
  }
});

router.post("/user/verify", async (req, res, next) => {
  try {
    const token = req.body.token;
    const decoded_user = jwt.verify(token, secret_key);
    const method = decoded_user.method;
    const client_id = decoded_user.client_id;
    const email = decoded_user.email;

    if (email === undefined) {
      const userId = await api.getUserIdBySocialSignInToken(method, client_id);
      res.header("Access-Control-Allow-Origin", "*");
      res.json({ userId: userId });
    } else {
      const userId = await api.getUserIdByEmailSignInToken(email);
      res.header("Access-Control-Allow-Origin", "*");
      res.json({ userId: userId });
    }
  } catch (err) {
    console.log("verify token failed: ", err);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(400);
  }
});

router.post("/user/shopping-list", async (req, res, next) => {
  try {
    const user_id = req.body.user_id;
    const items = await api.getShoppingList(user_id);

    res.header("Access-Control-Allow-Origin", "*");
    res.json({ items: items });
  } catch (err) {
    console.log("getting shopping list failed: ", err);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(400);
  }
});

router.get("/user/show-all", async (req, res, next) => {
  try {
    const users = await api.showAllUsers();
    res.header("Access-Control-Allow-Origin", "*");
    res.json(users);
  } catch (err) {
    console.log("getting user list failed: ", err);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(400);
  }
});

module.exports = router;
