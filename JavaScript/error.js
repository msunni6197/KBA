try{
    //code that might cause error
    let result= riskyOperation();
    console.log(result);
} catch(error) {
    //code to handle error
    console.log("An error occured" + error.message)
} finally {
    //code that runs regardless of error
    console.log("this will always run")
}

function riskyOperation() {
    let obj;
    return obj.property;//this will throw an error
}

function checkAge(age) {
    if(age<18) {
        throw new Error("You must be 18 or older");
    } else{
        console.log("You are allowed")
    }
}

try{
    checkAge(16);
} catch(error){
    console.log("Error:"+error.message);
} finally{
    console.log("this always execute")
}