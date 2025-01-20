// Schema Validate the entry in database if we have entered only 5 entries than user cannot enter more than 5 entries

// Model connect mongodb with nodejs 

const mongoose = require('mongoose');
const main  = async()=>{
    await mongoose.connect('mongodb://localhost:27017/E-comm');
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    });
    const productModel = mongoose.model('Products',ProductSchema);
    let data = new productModel({name : "m4", price : 1000});
    let result = await data.save();
    console.log(result);

}
main();