const express = require("express");
const router = express.Router();
const database = require("../config/database");
const productService = require("../services/product_service");
const cors = require("cors");

router.use(cors());

router.get("/", (req, res) => {
  productService.getAllProduct((result) => {
    res.send(result);
  });
});

router.get("/detail", (req, res) => {
  console.log("Fdfdf");
  productService.getProductById(1, (result) => {
    res.send(result);
  });
});

router.put("/update", (req, res) => {
  productService.updateProductId(1, (result) => {
    res.send(result);
  });
});

router.get("/search", (req, res) => {
  productService.searchProductByName(req.query.input, (result) => {
    res.send(result);
  });
});

module.exports = router;
