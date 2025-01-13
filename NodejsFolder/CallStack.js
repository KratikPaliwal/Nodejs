// All function will stored in the call stack
// When we run the code main function will be the first one to be stored in the call stack
// Then all other function like console, userdefined will be stored in the call stack
// It works like a stack data structure

// This will execute first
console.log('Started Execution');


// It will execute after the last console i.e [console.log('completed execution')]
//because node js is 90% written in javascript but 10% is written in c,c++;
// So setTimeout funtion will go to Node Api(Application Programming interface) call first then it will go to call stack

// It will to Node API first then another setTimeout so the second SetTimeout is less delay so it will Callback queue

// Then after the execution of main function it will go to call stack and execute
// Then the SetTimeout with higher delay will inter in callback queue and then in call stack and execute

setTimeout(()=>{
    console.log('wait for two seconds');
    
},2000);

setTimeout(()=>{
    console.log('wait for zero seconds');
},0);


// This will second it will after execution of first console.log() 
console.log('Completed Execution');
