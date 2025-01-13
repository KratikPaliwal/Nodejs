// Create update read delete operation with files(CURD Operation)

const fs = require('fs');
const path = require('path');

// to get path of current directory and the second parameter is the name of the file in which you want to make file
const dirpth =path.join(__dirname,'curd');
const filepth = `${dirpth}/ABC.txt`;
// To create file
// fs.writeFileSync(filepth,'This is my first file');


// To read data from the file
// fs.readFile(filepth,'utf8',(err,data)=>{
//     console.log(data);

// })

// To append data to the file
// fs.appendFile(filepth,'Kratik',(err)=>{
//     if(!err){
//         console.log('Data is appended');
//     }
// })


// To rename the file
// fs.rename(filepth,`${dirpth}/XYZ.txt`,(err)=>{
//     if(!err){
//         console.log('File is renamed');
//     }
// })

//To delete the file
//fs.unlinkSync(`${dirpth}/XYZ.txt`);

// Buffer is the temporaray storage required by node to create file.
