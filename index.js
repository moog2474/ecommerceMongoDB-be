const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const fs = require("fs");


const menuRouter = require("./routes/menu.route.js")
const categoryRouter = require("./routes/category.route.js")
const usersRouter = require("./routes/users.route.js")
const productsRouter = require("./routes/products.route.js")

app.use(cors())
app.use(express.json());

app.use("/be", menuRouter)
app.use("/be", categoryRouter)
app.use("/be", usersRouter)
app.use("/be", productsRouter)

app.get("/be", (req, res) => {
    res.json({ message: "Welcome to Rest API" })
})

app.listen(port, () => console.log("server is running"))