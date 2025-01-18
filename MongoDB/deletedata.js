const connectwithDb = require('./mongodb');
const deletedate = async ()=>{
    let data = await connectwithDb();
    let deleteddata = await data.deleteMany({Brands:'Samsung'});
    console.warn(deleteddata);
}

deletedate();