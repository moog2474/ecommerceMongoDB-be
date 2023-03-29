const { Router } = require("express");
const menu = require("../controllers/menu.controller");
const auth = require("../middleware/auth")

const route = Router();

route.get("/menu", menu.getAll);
route.get("/menu/:_id", menu.getOne);
route.post("/menu", auth, menu.createMenu)
route.put("/menu/:_id", auth, menu.updateMenu);
route.delete("/menu/:_id", auth, menu.deleteMenu);


module.exports = route;
