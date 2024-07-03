const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-Type','text/plain');
    res.end('Hello From Server!\n');
});

server.listen(3000,'127.0.0.1',()=>{
    console.log('Server is running at http://127.0.0.1:3000');
})