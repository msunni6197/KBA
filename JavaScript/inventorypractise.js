const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const inventory = new Map();

function askCommand() {
    console.log("Welcome to the inventory..")
    console.log("Available commands are 'add','summary','remove','search'")
    rl.question("Enter a command:",function (command) {
        switch (command.trim().toLocaleLowerCase()) {
            case 'add':
                addItemPrompt();
                break;
            case 'summary':
                printSummary();
                break;
            case 'remove':
                removeItemPrompt();
                break;
            case 'search':
                searchItemPrompt();
                break;
            default:
                console.log("Enter a valid command!")
                break;
        }
    })
}

function addItemPrompt() {
    rl.question('Enter ID: ',function (id) {
        rl.question('Enter a name: ',function (name) {
            rl.question('Enter category: ',function (category) {
                rl.question('Enter quantity: ',function (quantity) {
                    addItems(id,name,category,parseInt(quantity))
                    askCommand()
                })        
            })
        })
    })
}
function addItems(id,name,category,quantity) {
    if (inventory.has(id)) {
        console.log(`Error: ID ${id} already exists `)
    } else {
        inventory.set(id,{name,category,quantity})
        console.log(`ID ${id} successfully added`)
    }
}

function printSummary() {
    if (inventory.size>0){
        console.log('Summary of Inventory:')
        for(const [id,item] of inventory){
            console.log(`Id:${id},Name:${item.name},Category:${item.category},Quantity:${item.quantity}`)
        }
    }else {
        console.log("Inventory is empty")
    }
    askCommand()
    
}
function removeItemPrompt() {
    rl.question('Enter search term: ',function (id) {
        removeItem(id);
        askCommand();
    })
}
function removeItem(id) {
    if (inventory.has(id)){
        inventory.delete(id);
        console.log(`Item with ${id} removed`)
    }else{
        console.log(`Error: Item with ID ${id} not found`)
    }
}
function searchItemPrompt() {
    rl.question('Enter search term: ',function (searchTerm) {
        searchItem(searchTerm);
        askCommand();
    })
}

function searchItem(searchTerm) {
    const results = [];
    for(const [id,item] of inventory){
        if (id.includes(searchTerm||item.name.includes(searchTerm))||item.category.includes(searchTerm)){
            results.push(id,...item)
        }
    }
    if (results.length>0){
        console.log('search results: ',results)
    }else{
        console.log('no items found')
    }
}

askCommand()