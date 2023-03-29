const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();


const usersRouter = require("./routes/users.route.js")
const productsRouter = require("./routes/products.route.js")
const categoryRouter = require("./routes/category.route.js")
const brandRouter = require("./routes/brand.route.js")
const orderRouter = require("./routes/order.route.js")
const menuRouter = require("./routes/menu.route.js")

const port = process.env.PORT;
mongoose
.connect(process.env.MONGO_DB_URI)
.then(()=> console.log(`Database connected successfully`))
.catch(err=> console.log(err))


app.use(cors());
app.use(express.json());
app.use("/be", usersRouter)
app.use("/be", categoryRouter)
app.use("/be", productsRouter)
app.use("/be", brandRouter)
app.use("/be", orderRouter)
app.use("/be", menuRouter)


app.get("/be", (req, res) => {
    res.send( '<h1>Hello MongoDB from NodeJS</h1>')
})


app.listen(port, () => {  
    console.log(`Express Application is running on http://localhost:${port}`)
})
