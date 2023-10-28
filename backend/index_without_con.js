// console.log("hello world");

const express = require("express");
const app = express();
const port = 3005;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/products", (req, res) => {
  res.send(abc);
});

const router = express.Router();
const { getProducts, postProducts, getCategories } = require("./index_without_con");
