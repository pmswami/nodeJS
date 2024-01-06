const fs= require("fs")

// ______________________ READ STREAM __________________________
// const readStream  =fs.createReadStream("./docs/blog3.txt")
// readStream.on("data", (chunk)=>{
//     console.log("--------NEW CHUNK------------")
//     console.log(chunk.toString())
// }) //on is event listener, we need to listen to event of "data" for datastream

// const readStream  =fs.createReadStream("./docs/blog3.txt", {encoding:"utf8"})
// readStream.on("data", (chunk)=>{
//     console.log("--------NEW CHUNK------------")
//     console.log(chunk)
// }) //on is event listener, we need to listen to event of "data" for datastream


// ___________________ WRITE STREAM __________________________
const readStream  =fs.createReadStream("./docs/blog3.txt", {encoding:"utf8"})
const writeStream = fs.createWriteStream("./docs/blog4.txt")
// readStream.on("data", (chunk)=>{
//     console.log("--------NEW CHUNK------------")
//     console.log(chunk)
//     writeStream.write("\n NEW CHUNK \n")
//     writeStream.write(chunk)
// })

//Piping
readStream.pipe(writeStream)

//Duplex stream=> read and write simulataneously