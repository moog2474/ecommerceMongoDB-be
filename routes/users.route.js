const express = require("express");

const router = express.Router();
const users = require("../controllers/users.controller.js");


router.get("/users", users.getAll);
router.get("/users/:id", users.get)
router.post("/users", users.create);
router.delete("/users/:id", users.delete);
router.put("/users/:id", users.update);
router.post("users/login", users.login)

module.exports = router; 