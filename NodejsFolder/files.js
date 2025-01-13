const fs = require('fs');
 const path = require('path');
 const dirPath = path.join(__dirname,);
// for(i=0; i<5; i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,'File created successfully for' +i+' time');

// }

fs.readdir(dirPath,(err,files)=>{
    console.warn(files);
    files.forEach((itm)=>{
        console.log(itm);
    })
})

// cannot access te file from outside the directory When we run nodejs it become as a web server so anybody can access the file from outside the directory
// We can get the data of the file present in the webserver folder only
