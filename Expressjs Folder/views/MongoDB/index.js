const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'E-comm';
async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('Products');
    let data = await collection.find({}).toArray();
    console.log(data);
}

getData();
// To connect mongodb with nodejs