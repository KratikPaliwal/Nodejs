// Asynchronous means that no task will wait to finish the previous task 
// second task will not wait to complete the first task(Javascript is single thread)
console.log('first execution');
setTimeout(()=>{
    console.log('second execution');

},3000);

console.log('third execution');

// Drawback of Asynchronous
let a = 10;
let b = 20;
setTimeout(()=>{
    b=30;
    console.log('now executed....');
    
},2000)

console.log(a+b);