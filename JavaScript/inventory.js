const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


const inventory = new Map();

function askCommand(){
    console.log("Welcome to the Inventory Management CLI!");
    console.log("Availabe commands: add, remove, search, update, summary, exit");
    rl.question("\Enter a command:",function(command){
        switch (command.trim().toLowerCase()) {
            case 'add':
                addItemPrompt()
                break;
            case 'remove':
                addRemovePrompt()
                break;
            case 'search':
                a
        
            default:
                break;
        }
    })


}
//function to add item item addItemPrompt
function addItemPrompt(){
    rl.question("Enter item id: ",function(id){
        rl.question("Enter item name: ",function(name){
            rl.question("Enter item category: ",function(category){
                rl.question("Enter item quantity: ",function(quantity){
                        
                })
            })
        })
    })
}

//function to add an item
function addItem(id,name,category,quantity) {
    if(inventory.has(id) ){
        console.log(`Error:Item with ID ${id} already exists`)
    } else{
        inventory.set(id,{name,category,quantity});
        console.log(`Item with ID ${id} added`)
    }
}
//function to remove an item
function removeItem(id) {
    if (inventory.has(id)){
        inventory.delete(id);
        console.log(`Item with ID ${id} removed`)
    } else{
        console.log(`Error:Item with id ${id} not found`)
    }
}
//function to search for item
function searchItems(searchTerm) {
    const results =[];
    for (const [id,item] of inventory){
        if (id.includes(searchTerm)||item.name.includes(searchTerm)||item.category.includes(searchTerm)) {
            results.push(id,...item);
        }
    }
    if (results.length>0){;
        console.log('Search results:',results)
    } else{
        console.log('No items found!')
    }
}
//function to update an item
function updateItem(id,newName,newCategory,newQuantity) {
    if (inventory.has(id)){
        const item = inventory.get(id);
        item.name = newName || item.name;
        item.category = newCategory || item.category;
        item.quantity = newQuantity !== undefined ? newQuantity:item.quantity;
        inventory.set(id,item);
        console.log(`Item with ID ${id} updated`);   
    } else {
        console.log(`Error: Item with ID${id} not found`)
    }
}
//function to print a summary report of all items
function printSummary() {
    if (inventory.size>0){
        console.log('Inventory Summary:');
        for (const [id,item] of inventory){
            console.log(`ID ${id}, Name: ${item.name},Category: ${item.category},Quantity: ${item.quantity}`)
        }
    } else {
        console.log('inventory is empty.')
    }
}
//Hardcoded values
addItem('1','Laptop','Electronics',10);
addItem('2','Chair','Furniture',100);
addItem('3','Notebook','Stationary',23);

//remove an id
removeItem('3')

printSummary()
updateItem('1','Gaming Laptop','Electronics',8)
printSummary()