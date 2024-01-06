const http = require("http")

const server = http.createServer((req, res)=>{
    console.log("Request Made")

})
server.listen(3000, "localhost", ()=>{
    console.log("Listeninhg for requests on port 3000")
})