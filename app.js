const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  //req - request
  //res - response
  res.status(200).send("Hello amigos");
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
