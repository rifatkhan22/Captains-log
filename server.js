require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 3000
const Log = require("./models/logs")
const mongoose = require("mongoose")
const methodOverride = require("method-override")

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

//INDUCES
//=======================Index========================
app.get("/logs", (req, res) => {
    Log.find({}, (error,allLogs)=> {
        if(!error) {
            res.status(200).render("logs/Index", {
                logs : allLogs
            })
        } else {
            res.status(400).send(error)
        }
    })
})
//=========================New=========================
app.get("/logs/new",(req,res)=> {
    res.render("logs/New")
})
//==================Delete=========================
app.delete("/logs/:id", (req,res)=> {
    Log.findByIdAndDelete(req.params.id, (err,data)=> {
        res.redirect("/logs")
    })
})

//=====================Update===========================
app.put("/logs/:id", (req,res)=> {
    req.body.isShipBroken = req.body.isShipBroken === "on"? true : false
    Log.findByIdAndUpdate(req.params.id, req.body, (err,updatedLog)=>{
       if(!err) {
            res.status(200).redirect(`/logs/${req.params.id}`)
        } else {
            res.status(400).send(err)
        }
    })
})
//================Create================
app.post("/logs", (req,res)=> {
    if(req.body.isShipBroken === "on") {
        req.body.isShipBroken = true
    } else {
        req.body.isShipBroken = false
    }
    Log.create(req.body, (error,createdLog)=> {
        if(!error) {
            res.status(200).redirect("/logs")
        }else {
            res.status(400).send(error)
        }
    })
})
//====================Edit========================
app.get("/logs/:id/edit",(req,res)=> {
    Log.findById(req.params.id, (err,foundLog)=> {
        if(!err) {
            res.status(200).render("logs/Edit", {log: foundLog})
        }else {
            res.status(400).send({msg: err.message})
        }
    })
})
//======================Show=====================
app.get("/logs/:id", (req,res)=> {
    Log.findById(req.params.id, (error, foundLog)=> {
        if(!error) {
            res.status(200).render("logs/Show", {
                log : foundLog
            })
        } else {
            res.status(400).send(error)
        }
    })
})



app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
  }) 