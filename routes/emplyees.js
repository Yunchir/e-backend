// fro req orj irn

import express from "express";

const Router = express.Router();
let products = [];

Router.get("/products", (req, res) => {
  res.status(200).send("hi");
  console.log("req product avah gej bna");
});

Router.post("/products", (req, res) => {
  products.push(req.body);
  req.body.id = products.length;
  res.status(200).send(products);
});

Router.delete("/products", (req, res) => {
  products.pop();
  res.status(200).send(products);
});

export default Router;
