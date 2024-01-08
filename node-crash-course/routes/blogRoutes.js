const express = require("express")
const Blog = require("../models/blogs")
const router = express.Router()


// router.get("/blogs", (req, res)=>{
//     Blog.find().sort({ createdAt:-1})
//     .then(results=>{
//         res.render("index", {title: "All Blogs", blogs: results})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })
router.get("/", (req, res)=>{
    Blog.find().sort({ createdAt:-1})
    .then(results=>{
        res.render("index", {title: "All Blogs", blogs: results})
    })
    .catch(err=>{
        console.log(err)
    })
})

//requste for new blog creation
// router.post("/blogs", (req, res)=>{
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

router.post("/", (req, res)=>{
    // console.log(req.body)
    const blog = new Blog(req.body)
    blog.save()
    .then(results=>{
        // console.log(results)
        res.redirect("/")
        // res.send(results)
    })
    .catch(err => {
        console.log(err)
    })
})

// router.get("/blogs/create", (req, res)=>{
//     console.log("create router")
//     res.render("create", {title: "Create New Blog"})
// })

router.get("/create", (req, res)=>{
    console.log("create router")
    res.render("create", {title: "Create New Blog"})
})

//router for single document
// router.get("/blogs/:id", (req, res)=>{
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

router.get("/:id", (req, res)=>{
    const id = req.params.id
    // console.log(id)
    Blog.findById(id)
    .then(result=>{
        res.render("details", {title: "Blog Details", blog: result})
    })
    .catch(err=>{
        console.log(err)
    })
})

// router for deleting a blog
// router.delete("/blogs/:id", (req, res)=>{
//     const id = req.params.id
//     Blog.findByIdAndDelete(id)
//     .then(result=>res.json({redirect: "/blogs"}))
//     .catch(err=>{
//         console.log(err)
//     })
// })

router.delete("/:id", (req, res)=>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then(result=>res.json({redirect: "/blogs"}))
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router