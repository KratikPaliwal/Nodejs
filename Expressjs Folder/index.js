const express = require('express');
// To access the folder path
const path = require('path');
const hold = express();
const filePath = path.join(__dirname,'HtmlFolder');

// static method load the static files/pages/contents
// hold.use(express.static(filePath));
hold.get('',(_,resp)=>{
    resp.sendFile(`${filePath}/index.html`);
});


// It is used to give load the file to the server
hold.get('/hello',(_,resp)=>{
    resp.sendFile(`${filePath}/hello.html`);
})

// To load a file in get method sendFile function is used
hold.get('*',(_,resp)=>{
    resp.sendFile(`${filePath}/pagenotfound.html`)
})
hold.listen(3200);
