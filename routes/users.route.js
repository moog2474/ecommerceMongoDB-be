const { Router } = require("express");
const users = require("../controllers/users.controller");
const auth = require("../middleware/auth")

const route = Router();

route.get("/users", auth, users.getAll);
route.get("/users/:_id", auth, users.getOne);
route.put("/users/:_id", auth, users.updateUser);
route.delete("/users/:_id", auth, users.deleteUser);
route.post("/login", users.login);
route.post("/signup", users.register)

module.exports = route;
