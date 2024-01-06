const fs = require("fs")
// //reading files
// fs.readFile("./docs/blog1.txt", (err, data)=>{
//     if(err) console.log(err)
//     console.log(data.toString())
// })
// console.log("Last line")

// //writing modules
// fs.writeFile("./docs/blog1.txt", "Hello World", (err)=>{
//     console.log("File written successfully")
// })

// fs.writeFile("./docs/blog2.txt", "Hello World", (err)=>{
//     console.log("File written successfully")
// })// creates a new file if it doesnt exists

// directories
if(!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err)=>{
        if(err){
            console.log(err)
        }
        console.log("Folder Created")
    })
}
else{
    console.log("directory already esists")
    fs.rmdir("./assets", (err)=>{
        console.log(err)
    })
    console.log("Folder Deleted")
}

// deleting files
if(fs.existsSync("./docs/deleteme.txt")){
    fs.unlink("./docs/deleteme.txt", (err)=>{
        if(err){
            console.log(err)
        }
        console.log("File Deleted")
    })
}
else{
    fs.writeFile("./docs/deleteme.txt", "", (err)=>{
        console.log(err)
    })
    console.log("File Created")
}