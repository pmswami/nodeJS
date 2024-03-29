const express = require("express")
const { conforms } = require("lodash")
const morgan = require("morgan")
const mongoose = require("mongoose")
// const Blog = require("./models/blogs")
const router = require("./routes/blogRoutes")

const app = express()

//connect to mongodb
const pwd = "Test1234" 
const dbURI = `mongodb+srv://netninja:${pwd}@swamfire.ltna8bc.mongodb.net/nodetuts?retryWrites=true&w=majority`
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
    console.log("Connected to DB")
    //listen for requests
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})
//register view engine
app.set("view engine", "ejs")
// app.set("views", "myviews") //set custom directory for getting HTML templates. By default, its "views" directory

// //listen for requests
// app.listen(3000)

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
app.use(express.urlencoded({extended: true})) //converts form data into JS objects
app.use(morgan("dev"))

// // Mongoose and mongo sandbox routes
// // add new blog
// app.get("/add-blog",(req, res)=>{
//     const blog = new Blog({
//         title: "New Blog 2",
//         snippet: "ABout my new Blog",
//         body: "More about my new blog"
//     })
//     blog.save()
//     .then(results=>{
//         res.send(results)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// })

// //return all blogs
// app.get("/all-blogs", (req, res)=>{
//     Blog.find()
//     .then(results=>{
//         res.send(results)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

// //return single-blog
// app.get("/single-blog", (req, res)=>{
//     Blog.findById("659b8f3dde6df301ef67d5be")
//     .then(results=>{
//         res.send(results)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

//Routes
app.get("/", (req, res)=>{
    // // console.log("express app")
    // // res.send("<p>HomePage</p>")
    // // res.sendFile("./views/index.html",{root:__dirname})
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];
    // res.render("index", {title: "Home", blogs:blogs})
    res.redirect("/blogs")
})

// app.get("/blogs", (req, res)=>{
//     Blog.find().sort({ createdAt:-1})
//     .then(results=>{
//         res.render("index", {title: "All Blogs", blogs: results})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

// //requste for new blog creation
// app.post("/blogs", (req, res)=>{
//     // console.log(req.body)
//     const blog = new Blog(req.body)
//     blog.save()
//     .then(results=>{
//         // console.log(results)
//         res.redirect("/")
//         // res.send(results)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// })

// app.get("/blogs/create", (req, res)=>{
//     console.log("create router")
//     res.render("create", {title: "Create New Blog"})
// })

// //router for single document
// app.get("/blogs/:id", (req, res)=>{
//     const id = req.params.id
//     // console.log(id)
//     Blog.findById(id)
//     .then(result=>{
//         res.render("details", {title: "Blog Details", blog: result})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

// // router for deleting a blog
// app.delete("/blogs/:id", (req, res)=>{
//     const id = req.params.id
//     Blog.findByIdAndDelete(id)
//     .then(result=>res.json({redirect: "/blogs"}))
//     .catch(err=>{
//         console.log(err)
//     })
// })
app.use("/blogs", router)

app.get("/about", (req, res)=>{
    // res.send("<p>About</p>")
    // res.sendFile("./views/about.html",{root:__dirname})
    res.render("about",{title: "About"})
})

// //app redirect
// app.get("/about-us", (req, res)=>{
//     res.redirect("/about")
// })

//404 page
app.use((req, res)=>{
    // res.status(404).sendFile("./views/404.html",{root:__dirname})
    res.status(404).render("404", {title: "404"})
})//use this function for any other request coming in, always should be at bottom of all request type


