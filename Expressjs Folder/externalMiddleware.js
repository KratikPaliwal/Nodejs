module.exports = reqFilter = (req,resp,next)=>{
    if(!req.query.age)
        resp.send('Please provide your age');
    else if(req.query.age<18){
        resp.send('Sorry you cannot access this page');
    }
    else{
        resp.send('Welcome to the page user');
        next();
    }
    
}
// To access the external middleware
