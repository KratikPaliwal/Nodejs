//Asynchronous 

let a = 10;
let b = 20;
setTimeout(()=>{
    b=30;
    console.log('now executed....');
    
},2000)

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(50);
    },5000);

})

waitingData.then((data)=>{
    console.log(a+data);
})
console.log(a+b);


// to handle asynchronous task we can use promise
// Resolve will run when all task work perfectly
// Reject will run when any task fails