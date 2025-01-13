// This are the function which are used along with routes by the help of which
// we can access and modify req and response.
// we modify req,resp to check the user is authenticated or not.

// **To filter request and response **
const express = require('express');
const route = express.Router();
const middleware =require('./externalMiddleware');
const app = express();

route.use(reqFilter);
app.get('/',(req,resp)=>{
    resp.send('Welcome to the page');
});

app.get('/user',(req,resp)=>{
    resp.send('Welcome to the user page');
});

route.get('/ex',(req,resp)=>{
    resp.send('Welcome to the external page');
});

app.use('/',route);


app.listen(2100);
//Types of middleware
// 1. Built-in middleware
// 2. Third-party middleware
// 3. Application middleware
// 4. Router middleware
// 5. Error-handling middleware