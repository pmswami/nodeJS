const express = require("express")
const { conforms } = require("lodash")
const morgan = require("morgan")

const app = express()

//register view engine
app.set("view engine", "ejs")
// app.set("views", "myviews") //set custom directory for getting HTML templates. By default, its "views" directory

//listen for requests
app.listen(3000)

//middleware
// app.use((req,res, next)=>{
//     console.log("New request has been made")
//     console.log(`Host: ${req.hostname}`)
//     console.log(`Host: ${req.path}`)
//     console.log(`Host: ${req.method}`)
//     next()
// })

// app.use((req,res, next)=>{
//     console.log("In the next middleware")
//     next()
// })

//middleware & Static files
app.use(express.static("public"))

app.use(morgan("dev"))

app.get("/", (req, res)=>{
    // console.log("express app")
    // res.send("<p>HomePage</p>")
    // res.sendFile("./views/index.html",{root:__dirname})
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render("index", {title: "Home", blogs:blogs})
}) 

app.get("/about", (req, res)=>{
    // res.send("<p>About</p>")
    // res.sendFile("./views/about.html",{root:__dirname})
    res.render("about",{title: "About"})
})

// //app redirect
// app.get("/about-us", (req, res)=>{
//     res.redirect("/about")
// })

app.get("/blogs/create", (req, res)=>{
    res.render("create",{title: "Create New Blog"})
})

//404 page
app.use((req, res)=>{
    // res.status(404).sendFile("./views/404.html",{root:__dirname})
    res.status(404).render("404", {title: "404"})
})//use this function for any other request coming in, always should be at bottom of all request type


