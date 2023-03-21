const { Router } = require("express");
const users = require("../controllers/users.controllers");

const route = Router();

route.get("/users", users.getAll);
route.get("/users/:_id", users.getOne);
route.post("/users/", users.createUser);
route.put("/users/:_id", users.updateUser);
route.delete("/users/:_id", users.deleteUser);

module.exports = route;

// MONGO_DB_URI = "mongodb+srv://moog:sUKxbzbZ1tilhIMV@e-commerce.hdmohbc.mongodb.net/test"