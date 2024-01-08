const Blog = require("../models/blogs")

const blog_index = (req, res)=>{
    Blog.find().sort({ createdAt:-1})
    .then(results=>{
        res.render("index", {title: "All Blogs", blogs: results})
    })
    .catch(err=>{
        console.log(err)
    })
}

const blog_details = (req, res)=>{
    const id = req.params.id
    Blog.findById(id)
    .then(result=>{
        res.render("details", {title: "Blog Details", blog: result})
    })
    .catch(err=>{
        console.log(err)
    })
}

const blog_create_get = (req, res)=>{
    // console.log("create router")
    res.render("create", {title: "Create New Blog"})
}

const blog_create_post = (req, res)=>{
    const blog = new Blog(req.body)
    blog.save()
    .then(results=>{
        res.redirect("/")
    })
    .catch(err => {
        console.log(err)
    })
}

const blog_delete = (req, res)=>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then(result=>res.json({redirect: "/blogs"}))
    .catch(err=>{
        console.log(err)
    })
}

module.exports = {
    blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
}