const express = require('express');
const multer = require('multer');
const app = express();

const multer1 = multer({
    Storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,'uploads');
        },
        filename:function(req,file,cb)
        {
            cb(null,file.fieldname+"-"+Date.now()+'.png');
        }
    })
}).single('upload_file')

app.post('/upload',multer1,(req,resp)=>{
    resp.send('Sending file')

});
app.listen(2300);
