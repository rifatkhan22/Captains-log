const express = require("express")
const app = express()
const PORT = 3000
const Log = require("./models/logs")


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

app.use(express.urlencoded({extended: false}))


app.get("/logs/new", (req, res) => {
    res.render("New")
})

app.post("/logs", (req,res)=> {
    res.send("received")
})
app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
  }) 