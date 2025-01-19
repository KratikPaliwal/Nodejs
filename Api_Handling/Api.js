const express = require('express');
const mongoconnection = require('../MongoDB/mongodb');
const app = express();

app.get('/',async(req,resp)=>{
    let data = await mongoconnection();
    data = await data.find().toArray();
    resp.send(data);


});
app.listen(3000);

// We cannot pass body in get method
