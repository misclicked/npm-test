var http = require('http')
var fs = require('fs')
var map = require('through2-map')

var port = 80

var server = http.createServer((req,res)=>{
    if(req.method !== 'POST'){
        return res.end('send me a POST :(\n')
    }
    req.pipe(map(chunk=>{
        console.log(chunk.toString())
        return chunk.toString().toUpperCase();
    })).pipe(res)
})
server.listen(port)