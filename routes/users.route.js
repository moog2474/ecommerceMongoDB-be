const express = require("express");
const Users = require("../models/users.model");
const router = express.Router();


router.post("/users", async (req, res) =>{
    const body = req.body;
    const newUser = new Users(body);
    const result = await newUser.save();

    res.json({
        data: result
    });
});


module.exports = router; 