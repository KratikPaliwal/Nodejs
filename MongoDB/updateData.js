const dbconnect = require('./mongodb');

const updated =  async ()=>{
    let data = await  dbconnect();
    let result =  await data.updateMany(
        {Brands: 'Samsung'},
        {$set:{price:10000}}

    );
    console.warn(result);
}
updated();

// UpdateMany will update all the data with same condition
// UpdateOne will update only one data with same condition

// 1. To connect with the database
// 2. To make a async function that will update the data :
    // To initialised the connect in a variable that will store all the data
    // A variable that will store what we have updated 