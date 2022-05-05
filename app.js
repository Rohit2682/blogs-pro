const express = require("express");
const app = express()





const bodyParser = require("body-parser");
// const app = bodyParser()


//  app.get("/",(req,res)=>}) 
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs")








app.get("/", (req, res) => {

    res.render("home")
})

app.get("/compose", (req, res) => {

    res.render("compose")
})



app.listen(3000, () => {
    console.log("serever started on port : 3000");
})

