const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res)=>{
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
            break
        case "/about":
            path+="about.html"
            break
        default:
            path+="404.html"
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