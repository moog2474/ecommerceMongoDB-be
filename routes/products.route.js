const { Router } = require("express");
const products = require("../controllers/products.controller");
const auth = require("../middleware/auth")

const route = Router();

route.get("/products", products.getAll);
route.get("/products/:_id", products.getOne);
route.post("/products", auth, products.createProduct)
route.put("/products/:_id", auth, products.updateProduct);
route.delete("/products/:_id", auth, products.deleteProduct);

module.exports = route;
