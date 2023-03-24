const { Router } = require("express");
const category = require("../controllers/category.controller");
const auth = require("../middleware/auth")

const route = Router();

route.get("/category", auth, category.getAll);
route.get("/category/:_id", auth, category.getOne);
route.post("/category", auth, category.createCategory)
route.put("/category/:_id", auth, category.updateCategory);
route.delete("/category/:_id", auth, category.deleteCategory);


module.exports = route;
