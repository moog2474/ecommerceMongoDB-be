const { Router } = require("express");
const order = require("../controllers/order.controller");
const auth = require("../middleware/auth")

const route = Router();

route.get("/order", order.getAll);
route.get("/order/:_id", order.getOne);
route.post("/order", auth, order.createOrder)
route.put("/order/:_id", auth, order.updateOrder);
route.delete("/order/:_id", auth, order.deleteOrder);


module.exports = route;
