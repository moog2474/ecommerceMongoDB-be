const { Router } = require("express");
const brand = require("../controllers/brand.controller");
const auth = require("../middleware/auth")

const route = Router();

route.get("/brand", auth, brand.getAll);
route.get("/brand/:_id", auth, brand.getOne);
route.post("/brand", auth, brand.createBrand)
route.put("/brand/:_id", auth, brand.updateBrand);
route.delete("/brand/:_id", auth, brand.deleteBrand);


module.exports = route;
