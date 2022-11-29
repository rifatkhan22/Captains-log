const express = require("express")
const app = express()
const PORT = 3000


//two lines of code to use the JSX view Engine
app.set('view engine', 'jsx')// look for jsx files
// More conventional way to create the engine
app.engine('jsx', require('express-react-views').createEngine())



app.get("/new", (req, res) => {
    res.render("New")
})

app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
  }) 