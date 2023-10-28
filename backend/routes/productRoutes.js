const express = require("express");

const router = express.Router();

const { getProducts } = require("../controllers/productController");

router.get("/products", getProducts);
// router.get("/products/:id", getSingleProduct);
// router.get("/products/categories", getCategories);
// router.post("/products/categories", postCategories);

module.exports = router;
