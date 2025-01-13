const http = require('http');
const data = require('NodeFiles/data'); 
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();

}).listen(1101);