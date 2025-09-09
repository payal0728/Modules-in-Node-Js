
const http=require('http')
const settings=require('./config/settings')
const os=require('os')

const PORT=settings.port ||10500


const app=http.createServer((req , res)=>{
  // res.writeHead(200,{"content-type":"plane-text"})
    res.end("Hello World")
})

console.log(os.platform())
console.log(os.homedir())


app.listen(PORT, ()=>{
    console.log("Server started")
    console.log("http://localhost:5000");
})
