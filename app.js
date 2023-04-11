const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const usersController = require("./controllers/users");
usersController.registerUser("Macailh", "hola123");

require("./auth")(passport);

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  //req - request
  //res - response
  res.status(200).send("Hello");
});

app.post("/login", (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Missing data" });
  } else if (!req.body.user || !req.body.password) {
    return res.status(400).json({ message: "Missing data" });
  }

  usersController.checkUserCredentials(
    req.body.user,
    req.body.password,
    (err, result) => {
      if (err || !result) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ userId: result }, "secretPassword");
      res.status(200).json({ token: token });
    }
  );
});

app.get(
  "/team",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.status(200).send("Hello World!");
  }
);

app.post("/team/pokemons", (req, res) => {
  res.status(200).send("Hello amigos");
});

app.delete("/team/pokemons/:id", (req, res) => {
  res.status(200).send("Hello amigos");
});

app.put("/team", (req, res) => {
  res.status(200).send("Hello amigos");
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

exports.app = app;
