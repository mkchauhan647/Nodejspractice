const http = require('http')
const url = require('url')
const fs = require('fs')
http.createServer((req,res)=>{


    console.log(req.url);

    const urlObj = url.parse(req.url,true)

    console.log(urlObj)


    const filename = __dirname +  urlObj.pathname;
    
    fs.readFile(filename,(err,data)=>{
        if(err) throw err;
        res.write(data);
        res.end();

    })


    // res.end("Hello")
    // console.log("listening at 3000...")
}).listen(3000,(err)=>{
    console.log("Server is listening at 3000...")
})
