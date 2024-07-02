
let itemsMap = new Map();
itemsMap.set(1, 'Item 1');
itemsMap.set(2, 'Item 2');
itemsMap.set(3, 'Item 3');

function displayItems(map){
    let itemList = document.getElementById('itemList');
    itemList.innerHTML=''; //clear existing items
    map.forEach((value,key)=>{
        let listItem= document.createElement('li');
        listItem.textContent=`${key}:${value}`;
        //create delete and edit buttons
        let editbutton = document.createElement("button")
        editbutton.textContent='Edit';

        editbutton.onclick = () => edititem(key);

        let deletebutton = document.createElement("button")
        deletebutton.textContent='Delete';

        deletebutton.onclick = () => deleteitem(key);

        let controldiv = document.createElement("div");
        controldiv.className='controls';

        controldiv.appendChild(editbutton)
        controldiv.appendChild(deletebutton)

        listItem.appendChild(controldiv)

        itemList.appendChild(listItem);
    })
}


function addItem(key,value)
{
    itemsMap.set(key,value);
    displayItems(itemsMap);
}
function edititem(key) {
    let newvalue = prompt('Enter new value:',itemsMap.get(key));
    if (newvalue!==null){
        itemsMap.set(key,newvalue);
        displayItems(itemsMap)
    }
}
function deleteitem(key) {
    itemsMap.delete(key);
    displayItems(itemsMap);
}

document.getElementById('addItemForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    let key=document.getElementById('itemKey').value;
    let value=document.getElementById('itemValue').value;
    addItem(key,value);
    document.getElementById('addItemForm').reset();
})

window.onload = ()=>{
    displayItems(itemsMap);
}