const fs = require("fs")
// //reading files
// fs.readFile("./docs/blog1.txt", (err, data)=>{
//     if(err) console.log(err)
//     console.log(data.toString())
// })
// console.log("Last line")

//writing modules
fs.writeFile("./docs/blog1.txt", "Hello World", (err)=>{
    console.log("File written successfully")
})

fs.writeFile("./docs/blog2.txt", "Hello World", (err)=>{
    console.log("File written successfully")
})// creates a new file if it doesnt exists

// directories



// deleting files