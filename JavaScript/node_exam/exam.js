// Create a Node.js application to manage a student database using a Map to store student details. Implement the following functionalities using the readline module for input:

// a. Add a student with a unique ID, name, and grade. If the ID already exists, print an error message.
// b. Remove a student using their ID. If the student is not found, print an error message.
// c. Search for students by name or ID and print the matching results.
// d. Update the name and/or grade of a student using their ID. If the student is not found, print an error message.
// e. Print a summary report of all students in the database.

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

const database = new Map()

function askCommand() {
    console.log("Welcome to the Student Database");
    console.log("Available commands: add ,remove, search, update, and summary");
    rl.question('Enter a command: ',function(command){
        switch(command.trim().toLowerCase()){
            case 'add':
                addstudentPrompt();
                break;
            case 'remove':
                removestudentPrompt();
                askCommand();
                break;
            case 'search':
                searchPrompt();
                askCommand();
                break;
            case 'update':
                updatestudentDb();
                break;
            case 'summary':
                printSummary();
                askCommand();
                break;
            default:
                console.log("Error:Enter a valid command")
        }
    })
}

function addstudentPrompt(){
    rl.question('enter id:',function(id){
        rl.question('enter name:',function(name){
            rl.question('enter grade',function(grade){
                addstudents(id,name,grade);
                askCommand();
            })
        })
    })
}
function addstudents(id,name,grade){
    if (database.has(id)){
        console.log(`Error: Student with ID ${id} already exists`)
    }else{
        database.set(id,{name,grade})
        console.log(`Student with ID ${id} added`)
    }
}
function removestudentPrompt(){
    rl.question('Enter id: ',function(id){
        removeStudents(id);
    })
}
function removeStudents(id){
    if (database.has(id)){
        database.delete(id)
        console.log(`Student with ID ${id} removed.`)
    }else{
        console.log(`Error:Student with ID ${id} not found`)
    }
}
function searchPrompt(){
    rl.question('Enter search term: ',function(searchTerm){
        const results = [];
        for (const [id,student] of database){
            if(id.includes(searchTerm)||student.name.includes(searchTerm)){
                results.push(id,student);
            }
        }
        if (results.length>0){
            console.log("Search results: ",results)
        }else{
            console.log("Found Nothing")
        }
    })
}
function updatestudentDb(){
    rl.question('enter id: ',function(id){
        rl.question('enter name: ',function(name){
            rl.question('enter grade: ',function(grade){
                updateDb(id,name,grade);
                askCommand();
            })
        })
    })
}

function updateDb(id,newName,newGrade){
    if (database.has(id)){
        const student = database.get(id);
        student.name =newName||student.name;
        student.grade = newGrade||student.grade;
        database.set(id,student)
        console.log(`Student with ID ${id} updated.`);
    } else{
        console.log(`Error: Student with ID ${id} not found.`)
    }

}
function printSummary(){
    if (database.size>0){
        console.log("Summary Report:")
        for(const [id,student] of database){
            console.log(`ID: ${id}, Name: ${student.name}, Grade: ${student.grade}`)
        }
    }else{
        console.log("Database is empty")
    }
}
askCommand();