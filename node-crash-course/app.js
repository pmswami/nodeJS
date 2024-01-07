const express = require("express")

const app = express()

//register view engine
app.set("view engine", "ejs")
// app.set("views", "myviews") //set custom directory for getting HTML templates. By default, its "views" directory


//listen for requests
app.listen(3000)

app.get("/", (req, res)=>{
    // console.log("express app")
    // res.send("<p>HomePage</p>")
    // res.sendFile("./views/index.html",{root:__dirname})
    res.render("index")
}) 

app.get("/about", (req, res)=>{
    // res.send("<p>About</p>")
    // res.sendFile("./views/about.html",{root:__dirname})
    res.render("about")
})

// //app redirect
// app.get("/about-us", (req, res)=>{
//     res.redirect("/about")
// })

app.get("/blogs/create", (req, res)=>{
    res.render("create")
})

//404 page
app.use((req, res)=>{
    // res.status(404).sendFile("./views/404.html",{root:__dirname})
    res.status(404).render("404")
})//use this function for any other request coming in, always should be at bottom of all request type


