const express = require('express');
require('./newmon');
const Product = require('./Products');
const app = express();
app.use(express.json())

app.post('/create',async(req,resp)=>{
    let data = await new Product(req.body);
    let result = await data.save();
    console.log(req.body);
    
    resp.send(result);
})

app.listen(2000);