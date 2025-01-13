const http = require('http');
http.createServer((req, resp)=>{
    resp.write('<h1>This has been written somewhere<\h1>');
    resp.end();
}).listen(5002);