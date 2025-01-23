const express = require('express');
require('./newmon');
const Product = require('./Products');
const { name } = require('ejs');
const app = express();
app.use(express.json())

// app.post('/create',async(req,resp)=>{
//     let data = await new Product(req.body);
//     let result = await data.save();
//     console.log(req.body);
    
//     resp.send(result);
// })

// app.get('/some',async(req,resp)=>{
//     let data = await Product.find();
//     resp.send(data);
// })

// app.delete('/delete/:_id',async(req,resp)=>{
//     console.log(req.params);
//     let data = await Product.deleteOne(req.params);
//     resp.send(data);

// })



// To make api for searching in nodejs
app.get('/search/:key',async(req,resp)=>{
    let data = await Product.find(
        {
            '$or':[
                {"name":{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data)
})

// We  can perform search using post and put method

app.listen(2000);