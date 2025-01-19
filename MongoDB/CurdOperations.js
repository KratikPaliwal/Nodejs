// Steps to connect with the database :
// 1. Store mongodb moudule in a variable {MongoClient}
const { MongoClient } = require('mongodb');
// 2. Store the url of the database
const url = 'mongodb://localhost:27017';
// 3.create a new MongoDB client instance to connect your Node.js application to the MongoDB database server.
const client = new MongoClient(url);
// 4. store the database name 
const database = 'E-comm';

const getData = async ()=>{
    let result = await client.connect(); //To connect with the database server
    let db =  result.db(database); //To select the database
    let collection = db.collection('Products');//To select the collection
    return collection;
}

getData();

const readData = async ()=>{
    let data = await getData(); //To get the collection "Prtoducts" data
    data = await data.find().toArray(); //To get all the data from the collection
    console.warn(data);
}
readData();

const inserData = async()=>{
    let data = await getData();
    const result = await data.insertMany([
        {name: 'Apple', price: 100},
        {name: 'Banana', price: 50},
        {name: 'Orange', price: 70}
    ]);
    console.warn(result);
}
inserData();
const updateData = async ()=>{
    let data = await getData();
    let result = await data.updateMany(
        {name: 'Apple'},
        {$set:{price: 200}}
    );
    console.warn(result);
    
}
updateData();
const deleteData = async ()=>{
    let data = await getData();
    let result = await data.deleteOne({name: 'Apple'});
    console.warn(result);
}

