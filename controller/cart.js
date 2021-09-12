const express = require("express");
const router = express.Router();
const database = require("../config/database");
const cartService = require("../services/cart_services");
const cors = require("cors");

router.use(cors());

router.post("/", (req, res) => {
  const { idLogin } = req.body;
  cartService.getAllCart(idLogin, (result) => {
    res.send(result);
  });
});

router.post("/add", (req, res) => {
  const { productId, userId } = req.body;
  cartService.addToCart(productId, userId, (result) => {
    res.send(result);
  });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  cartService.deleteCartById(id, (result) => {
    res.send(result);
  });
});

router.put("/update", (req, res) => {
  const { cartId, quantity } = req.body;
  cartService.updateCartById(cartId, quantity, (result) => {
    res.send(result);
  });
});

module.exports = router;
