const express = require('express');
const path = require('path');
const app = express();
const filepath = path.join(__dirname,'HtmlFolder');
 app.get('',(_,resp)=>{
    resp.sendFile(`${filepath}/index.html`);
 });

 app.set('view engine','ejs');
 app.get('/hello',(_,resp)=>{
   resp.sendFile(`${filepath}/hello.html`);
 });

 app.get('/profiles',(_,resp)=>{
   const userdata = {
      name:'Your name',
      age:20,
      occupation: 'Software develoer',
      skills:['HTML','CSS','JS','Node.js'],

   };
   resp.render(`profile`,{userdata});

 })

 app.get('/login',(_,resp)=>{
   const newskill ={
      skill:['expressjs','mangodb'],
   }
   resp.render('login',{newskill})
 });

 app.get('/common',(_,resp)=>{
   resp.render('common');
 })

 app.get('*',(_,resp)=>{
   resp.sendFile(`${filepath}/pagenotfound.html`);
 })

 app.listen(5050);