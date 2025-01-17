const getData  = require('./mongodb');
    // let data = await collection.find({name:'16 pro max'}).toArray();
 

const main = async ()=>{
    let data = await getData();
    data = await data.find().toArray();
    console.warn(data);
} 
main();