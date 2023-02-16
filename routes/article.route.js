const express = require("express");

const router = express.Router();
const article = require("../controllers/article.controller.js");


router.get("/article", article.getAll);
router.get("/article/:id", article.get)
router.post("/article", article.create);
router.delete("/article/:id", article.delete);
router.put("/article/:id", article.update);

module.exports = router; 