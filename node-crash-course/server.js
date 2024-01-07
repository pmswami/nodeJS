const http = require("http")
const fs = require("fs")
const _ = require("lodash")
const server = http.createServer((req, res)=>{

    //lodash
    const num = _.random(1, 20)
    console.log(num)

    const greet = _.once(()=>{
        console.log("Hello")
    })

    greet()
    greet()

    // console.log(req.url)
    // console.log(req.method)
    // console.log("Request Made")
    //set header content type
    // res.setHeader("Content-Type", "text/plain")
    // res.write("Hello Ninjas")
    // res.end()
    res.setHeader("Content-Type", "text/html")
    // res.write("<head><link rel='stylsheet' href='#'></head>")
    // res.write("<p>Hello Ninjas</p>")
    // res.write("<p>Hello again, Ninjas</p>")
    
    // //send an HTML file
    // fs.readFile("./views/index.html", (err, data)=>{
    //     if(err){
    //         console.log(err)
    //         res.end()
    //     }
    //     else{
    //         // res.write(data)
    //         // res.end()
    //         res.end(data)
    //     }
    // })

    let path = "./views/"
    console.log(req.url)
    switch(req.url){
        case "/":
            path+="index.html"
            res.statusCode = 200
            break
        case "/about":
            path+="about.html"
            res.statusCode = 200
            break
        case "/about-me":
            res.statusCode = 301
            res.setHeader("Location", "about")
            res.end()
            break
        default:
            path+="404.html"
            res.statusCode = 404
            break
    }
    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        else{
            // res.write(data)
            // res.end()
            res.end(data)
        }
    })
})
server.listen(3000, "localhost", ()=>{
    console.log("Listening for requests on port 3000")
})