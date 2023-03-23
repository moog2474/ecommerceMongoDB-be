const { Router } = require("express");
const users = require("../controllers/users.controllers");
const auth = require("../middleware/auth")

const route = Router();

route.get("/users", auth, users.getAll);
route.get("/users/:_id", auth, users.getOne);
route.put("/users/:_id", auth, users.updateUser);
route.delete("/users/:_id", auth, users.deleteUser);
route.post("/login", users.login);
route.post("/signup", users.register)

module.exports = route;

// MONGO_DB_URI = "mongodb+srv://moog:sUKxbzbZ1tilhIMV@e-commerce.hdmohbc.mongodb.net/test"