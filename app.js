const express = require("express");
const passport = require("passport");
require("./auth")(passport);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //req - request
  //res - response
  res.status(200).send("Hello");
});

app.post("/login", (req, res) => {
  res
    .status(200)
    .json({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.350o18fZPeOi3tEGEac6U4UzuB_k-FuZeVQvzf369IQ",
    });
});

app.get("/team", (req, res) => {
  res.status(200).send("Hello amigos");
});

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
