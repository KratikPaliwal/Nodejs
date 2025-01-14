const getData =require('./mongodb');
const insert = async ()=>{
    const data = await getData();
    const result = await data.insertMany([
        {name:'S22', Brands: 'Samsung', price:70000, category: 'Mobile'},
        {name:'S24', Brands: 'Samsung', price:610000, category: 'Mobile'}
    
    ]);
}
insert();