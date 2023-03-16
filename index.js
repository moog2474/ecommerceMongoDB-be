const express = require("express");
const mongoose = require("mongoose");

const port = 8000;

const app = express();

const MONGO_CONNECTION_STRING = `mongodb+srv://moog:ioLvbZV2fbJj9MpR@e-commerce.hdmohbc.mongodb.net/test`
mongoose.connect(MONGO_CONNECTION_STRING)
.then(()=> console.log(`Database connected successfully`))
.catch(err=> console.log(err))

const usersRouter = require("./routes/users.route.js")



app.use(express.json());

app.use("/be", usersRouter)

app.get("/be", (req, res) => {
    res.send( '<h1>Hello MongoDB from NodeJS</h1>')
})


app.listen(port, () => {  
    console.log(`Express Application is running on http://localhost:${port}`)
})