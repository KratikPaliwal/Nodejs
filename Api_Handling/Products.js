
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    Brands:String,
    Category:String,
    Price:String

},

{
    collection:'Products'
}
)

module.exports = mongoose.model('Products',productSchema);