//import the readline module
const readline = require('readline');
 //create an intreface to read data from standard input(stdin)
 //and standard output(stdout)
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 

 });

 function askName() {
    rl.question("What is your name?",function(name){
        console.log(`Hello,${name}!`);
        askFavoritelanguage();
    });   
 }
 function askFavoritelanguage(params) {
    rl.question("What is your favorite language?",function (language) {
        console.log(`${language} is a great choice`);
        rl.close();
    })
 }
 //start
 console.log('Welcome to simple user interface using readline');
 askName();
