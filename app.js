const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  //req - request
  //res - response
  res.status(200).send("Hello");
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
