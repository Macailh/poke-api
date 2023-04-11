const uuid = require("uuid");
const crypto = require("./crypto");

const userDatabase = {
  "0001": {
    password: "",
    salt: "",
    username: "",
  },
};

const registerUser = (username, password) => {
  crypto.hashPassword(password, (err, result) => {
    userDatabase[uuid.v4()] = {
      username: username,
      password: crypto.hashPassword(password),
    };
  });
  // save in the db the user
};

const checkUserCredentials = (userId, password, done) => {
  // check the credentials
  let user = userDatabase[userId];
  crypto.comparePassword(password, user.password, done);
  return false;
};
