const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();


const usersRouter = require("./routes/users.route.js")
const port = 8000;
mongoose
.connect(process.env.MONGO_DB_URI)
.then(()=> console.log(`Database connected successfully`))
.catch(err=> console.log(err))


app.use(cors());
app.use(express.json());
app.use("/be", usersRouter)

app.get("/be", (req, res) => {
    res.send( '<h1>Hello MongoDB from NodeJS</h1>')
})


app.listen(port, () => {  
    console.log(`Express Application is running on http://localhost:${port}`)
})
