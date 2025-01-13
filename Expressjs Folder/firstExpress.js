const express = require('express');
const app = express();
app.get('',(req,resp)=>{
    
    resp.send(`<h1>Hello Express</h1>` ); 
    console.log('Request send by the broswer is : ',req.query.name);
    
});
app.listen(2000);

app.get('/about',(req,resp)=>{
    resp.send(`This is about page
        <input type="text" placeholder="Enter your name" value='${req.query.name}'>
        <button>Submit</button>`);
})

app.get('/help',(req,resp)=>{
    resp.send('Helping you soon stay turned.....');
})

// req and resp is used to interact with server and client
// client will send data as a req and server will send data as resp