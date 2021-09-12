const express = require("express");
const router = express.Router();
const orderServices = require("../services/order_services");
const cors = require("cors");

router.use(cors());

router.post("/", (req, res) => {
  const { order, orderDetail } = req.body;
  if (!order || !orderDetail) {
    res.status(503).send({ status: 1, message: "Messages not available!" });
  }

  orderServices.saveOrder(order, orderDetail, (result) => {
    console.log("result: ", result);
    res.send(result);
  });
});

module.exports = router;
