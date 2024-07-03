let namelist=[];
let i=1
function nameEntry(){
    let names=document.getElementById("name").value
    if(names!==""){
        namelist.push(names)
        document.getElementById("name").value='';
        let op=document.createElement("option")
        op.textContent=i
        document.getElementById("roll").appendChild(op)
        i++;
    }
    else{
        window.alert("enter valid name")
        
    }   
}
function nameDisplay(){
    const rollno=Number(document.getElementById("roll").value)
    window.alert(namelist[rollno-1])
}