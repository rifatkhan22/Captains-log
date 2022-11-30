require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 3000
const Log = require("./models/logs")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const logsController = require("./controllers/logController")

//connect to mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once("open", () => {
    console.log('connected to mongo')
})
//two lines of code to use the JSX view Engine
app.set('view engine', 'jsx')// look for jsx files
// More conventional way to create the engine
app.engine('jsx', require('express-react-views').createEngine())

//====Middleware=================================
app.use((req, res, next) => {
    console.log("Im running for all routes")
    console.log("1. middleware")
    next()
  })

app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: false}))

//logsController -routes ran thru here
app.use("/logs", logsController)

app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
  }) 