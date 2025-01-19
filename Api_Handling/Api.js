const express = require('express');
const mongoconnection = require('../MongoDB/mongodb');
const app = express();

// Used to get body form request
app.use(express.json());

app.get('/',async(req,resp)=>{
    let data = await mongoconnection();
    data = await data.find().toArray();
    resp.send(data);


});


app.post('/',async(req,resp)=>{
    let data = await mongoconnection();
    let result = await data.insertOne(req.body);
    resp.send(result);

})

// To insert data to database form Api we use post method

app.put('/', async(req, resp)=>{
    let data = await mongoconnection();
    let result = await data.updateOne(
        {name : "Nokia 3310"},
        {$set : req.body}
    );
    resp.send({result: "Update"});

    

})

app.listen(3100);

// To read data form the Api we use get method
// We cannot pass body in get method
