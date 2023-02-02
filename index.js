const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const fs = require("fs");


const menuRouter = require("./routes/menu.route.js")
const categoryRouter = require("./routes/category.route.js")
const usersRouter = require("./routes/users.route.js")

app.use(cors())
app.use(express.json());

app.use("/api", menuRouter)
app.use("/api", categoryRouter)
app.use("/api", usersRouter)

app.get("/api", (req, res) => {
    res.json({ message: "Welcome to Rest API" })
})

app.listen(port, () => console.log("server is running"))