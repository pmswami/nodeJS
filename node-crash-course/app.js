const express = require("express")

const app = express()

//listen for requests
app.listen(3000)

app.get("/", (req, res)=>{
    // console.log("express app")
    // res.send("<p>HomePage</p>")
    res.sendFile("./views/index.html",{root:__dirname})
}) 

app.get("/about", (req, res)=>{
    // res.send("<p>About</p>")
    res.sendFile("./views/about.html",{root:__dirname})
})

//app redirect
app.get("/about-us", (req, res)=>{
    res.redirect("/about")
})

//404 page
app.use((req, res)=>{
    res.status(404).sendFile("./views/404.html",{root:__dirname})
})//use this function for any other request coming in, always should be at bottom of all request type
