const dbconfig = require("../config/dbconfig");
const mysql = require("mysql");
const db = mysql.createConnection(dbconfig);

exports.showAllUsers = async () => {
  let selectQuery = "SELECT * FROM customers";
  return new Promise((resolve, reject) => {
    db.query(selectQuery, (error, rows) => {
      if (error) reject();
      if (rows !== undefined && rows.length > 0) {
        resolve(rows);
      } else {
        resolve(false);
      }
    });
  }).catch((err) => console.log("show all users err: ", err));
};

exports.isUserExistsByNameAndPhoneNumber = (name, phone) => {
  let selectQuery = `SELECT method, email FROM customers WHERE phone_no = "${phone}" AND name = "${name}"`;

  return new Promise((resolve, reject) => {
    db.query(selectQuery, (error, rows) => {
      if (error) reject();
      if (rows !== undefined && rows.length > 0) {
        const user = rows[0];
        const method = user.method;
        console.log(user);
        resolve({
          exists: true,
          method: user.method,
          email: method === "email" ? user.email : "",
        });
      } else {
        resolve({
          exists: false,
        });
      }
    });
  });
};

exports.isSocialUserExists = (method, id) => {
  let selectQuery = `SELECT C.id FROM customers as C, customer_sns_credentials WHERE method = "${method}" AND client_id = "${id}"`;

  return new Promise((resolve, reject) => {
    db.query(selectQuery, (error, rows) => {
      if (error) reject();
      if (rows !== undefined && rows.length > 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }).catch((err) => console.log("is social user exists err: ", err));
};

exports.getUserIdBySocialSignInToken = (method, id) => {
  let selectQuery = `SELECT C.id FROM customers as C, customer_sns_credentials WHERE method = "${method}" AND client_id = "${id}"`;

  return new Promise((resolve, reject) => {
    db.query(selectQuery, (error, rows) => {
      if (error) reject();
      if (rows.length > 0) {
        resolve(rows[0].id);
      } else {
        reject("no user found!!");
      }
    });
  }).catch((err) => console.log("get user id by social sign in err: ", err));
};

exports.getUserIdByEmailSignInToken = (email) => {
  let selectQuery = `SELECT id FROM customers WHERE method = "email" AND email = ${email}`;

  return new Promise((resolve, reject) => {
    db.query(selectQuery, (error, rows) => {
      if (error) reject();
      if (rows.length > 0) {
        resolve(rows[0].id);
      } else {
        reject("no user found!!");
      }
    });
  }).catch((err) => console.log("get user id by email sign in err: ", err));
};

exports.isEmailUserExists = (email) => {
  let selectQuery = `SELECT id FROM customers WHERE method = "email" AND email = "${email}"`;

  return new Promise((resolve, reject) => {
    db.query(selectQuery, (error, rows) => {
      if (error) reject();
      if (rows !== undefined && rows.length > 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }).catch((err) => console.log("is email user exists err: ", err));
};

exports.addSocialUser = async (user) => {
  const name = user.name;
  const method = user.method;
  const verification_id = user.verification_id;
  const birth = user.birth;
  const gender = user.gender;
  const phone_no = user.phone_no;
  const agreed = user.agreed;

  let insertQuery =
    "INSERT INTO customers(`name`, `birth_date`, `gender`, `method`, `phone_no`, `role_id`, `verification_id`, `agreed_marketing`)";
  insertQuery += ` VALUES("${name}", "${birth}", "${gender}", "${method}", "${phone_no}", 2, ${verification_id}, ${agreed})`;
  const insertToCustomer = () =>
    new Promise((resolve, reject) => {
      db.query(insertQuery, (error, _) => {
        if (error) {
          reject(error);
        }
        resolve(true);
      });
    }).catch((err) => console.log("add social user err: ", err));

  const succeed = await insertToCustomer();

  if (!succeed) {
    return false;
  } else {
    const result = await insertSocialCredential(user);
    return result;
  }
};

async function insertSocialCredential(user) {
  const token = user.token;
  const name = user.name;
  const phone_no = user.phone_no;
  let selectQuery = `SELECT id FROM customers WHERE name = "${name}" AND phone_no = "${phone_no}"`;

  const getCustomerId = async () =>
    new Promise((resolve, reject) => {
      db.query(selectQuery, (error, rows) => {
        if (error) {
          reject(error);
        }
        if (rows !== undefined && rows.length > 0) {
          resolve(rows[0].id);
        } else {
          resolve(-1);
        }
      });
    });

  const customerId = await getCustomerId();
  if (customerId === -1) {
    console.log("failed to get customer id");
    return false;
  } else {
    let insertQuery =
      "INSERT INTO customer_sns_credentials(`customer_id`, `client_id`)";
    insertQuery += ` VALUES(${customerId}, "${token}")`;

    return new Promise((resolve, reject) => {
      db.query(insertQuery, (error, _) => {
        if (error) reject(error);
        resolve(true);
      });
    }).catch((err) => console.log("add email user err: ", err));
  }
}

exports.addEmailUser = async (user) => {
  const email = user.email;
  const method = user.method;
  const verification_id = user.verification_id;
  const name = user.name;
  const birth = user.birth;
  const gender = user.gender;
  const phone_no = user.phone_no;
  const agreed = user.agreed;

  let insertQuery =
    "INSERT INTO customers(`name`, `email`, `birth_date`, `gender`, `method`, `phone_no`, `role_id`, `verification_id`, `agreed_marketing`)";
  insertQuery += ` VALUES("${name}", "${email}", "${birth}", "${gender}", "${method}", "${phone_no}", 2, ${verification_id}, ${agreed})`;
  const insertToCustomer = () =>
    new Promise((resolve, reject) => {
      db.query(insertQuery, (error, _) => {
        if (error) {
          reject(error);
        }
        resolve(true);
      });
    }).catch((err) => console.log("add email user err: ", err));

  const succeed = await insertToCustomer();

  if (!succeed) {
    return false;
  } else {
    const result = await insertEmailCredential(user);
    return result;
  }
};

async function insertEmailCredential(user) {
  const email = user.email;
  const pw = user.pw;
  const name = user.name;
  const phone_no = user.phone_no;
  let selectQuery = `SELECT id FROM customers WHERE name = "${name}" AND phone_no = "${phone_no}"`;

  const getCustomerId = () =>
    new Promise((resolve, reject) => {
      db.query(selectQuery, (error, rows) => {
        if (error) {
          reject(error);
        }
        if (rows !== undefined && rows.length > 0) {
          resolve(rows[0].id);
        } else {
          resolve(-1);
        }
      });
    });

  const customerId = await getCustomerId();
  if (customerId === -1) {
    console.log("failed to get customer id");
    return false;
  } else {
    let insertQuery =
      "INSERT INTO customer_credentials(`customer_id`, `email`, `pw_hash`)";
    insertQuery += ` VALUES(${customerId}, "${email}", "${pw}")`;

    return new Promise((resolve, reject) => {
      db.query(insertQuery, (error, _) => {
        if (error) reject(error);
        resolve(true);
      });
    }).catch((err) => console.log("add email user err: ", err));
  }
}

exports.getShoppingList = (userId) => {
  let selectQuery = `SELECT item_name, item_count FROM customers, user_added_item`;
  selectQuery += ` WHERE user.id = user_added_item.user_id AND user.id = "${userId}"`;

  return new Promise((resolve, reject) => {
    db.query(selectQuery, (error, rows) => {
      if (error) reject();
      if (rows.length > 0) {
        resolve(rows);
      } else {
        resolve([]);
      }
    });
  }).catch((err) => console.log("get shopping list err: ", err));
};

exports.getCodeGroupAndIdByCode = (code) => {
  let selectQuery = `SELECT * FROM verifications WHERE code = "${code}"`;

  return new Promise((resolve, reject) => {
    db.query(selectQuery, (error, rows) => {
      if (error) reject();
      if (rows !== undefined && rows.length > 0) {
        const group = rows[0];
        resolve({
          valid: true,
          id: group.id,
          group: group.group,
        });
      } else {
        resolve({ valid: false });
      }
    });
  });
};

exports.getUserEmailByNameAndPhoneNumber = (name, phone) => {
  let selectQuery = `SELECT email FROM customers WHERE name = "${name}" AND phone_no = "${phone}"`;

  return new Promise((resolve, reject) => {
    db.query(selectQuery, (error, rows) => {
      if (error) reject();
      if (rows !== undefined && rows.length > 0) {
        const user = rows[0];
        resolve({
          exists: true,
          email: user.email,
        });
      } else {
        resolve({ exists: false });
      }
    });
  });
};

exports.isUserExistsToChangePw = (name, phone, email) => {
  let selectQuery = `SELECT id FROM customers WHERE name = "${name}" AND phone_no = "${phone}" AND email = "${email}"`;
  return new Promise((resolve, reject) => {
    db.query(selectQuery, (error, rows) => {
      if (error) reject();
      if (rows !== undefined && rows.length > 0) {
        resolve({
          exists: true,
        });
      } else {
        resolve({ exists: false });
      }
    });
  });
};
