// Schema Validate the entry in database if we have entered only 5 entries than user cannot enter more than 5 entries

// Model connect mongodb with nodejs 


// To save data in db
const  mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/E-comm');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    Brands:String,
    Category:String
},
{
    collection:'Products'
}
);

const main = async ()=>{
    const Product = mongoose.models.Products || mongoose.model('Products', productSchema);

    let data = new Product({name:"qw00",price:1001,Brands:'QT',Category:'QWW'});
    const result = await data.save();
    console.log(result);


}
main();


// To update data in db;

const UpdateData = async ()=>{
    const Product = mongoose.models.Products || mongoose.model('Products', productSchema);
    let data = await Product.updateMany(
        {name: 'qw00'},
        {$set:{price:1111}}
    )
    console.log(data);

}

UpdateData();

const deleteData = async()=>{
    const Product = mongoose.model.Products || mongoose.model('Products',productSchema);
    let data = await Product.deleteOne({name :'Apple'});
    console.log(data);
}

// deleteData();
const findInDb = async()=>{
    const Product = mongoose.model.Products || mongoose.model('Products',productSchema);
    let data = await Product.find({name: 'qw00'});
    console.log(data);
}

findInDb();
