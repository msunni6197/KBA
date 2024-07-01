let recipies = [];
let difficulties = [];
function addRecipe() {
    const recipeInput = document.getElementById("recipeInput");
    const difficultyInput = document.getElementById("difficultyInput");
    const recipeList = document.getElementById('id1');
    let recipe = recipeInput.value.trim();
    let difficulty= Number(difficultyInput.value.trim());
    if (recipe!==''&& !isNaN(difficulty) && difficulty>=1 && difficulty <=3) {
        recipies.push(recipe);
        difficulties.push(difficulty);

        let l=document.createElement("li");
        l.textContent=recipe;

        switch(difficulty) {
            case 1 :
                l.classList.add("difficulty-easy");
                break;
            case 2:
                l.classList.add("difficulty-moderate");
                break;
            case 3:
                l.classList.add("difficulty-hard")
                break;
        }
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = function(){
            l.classList.toggle('completed');
        }
        l.appendChild(completeButton);


        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function(){
        const newRecipe = prompt('Edit Recipe: ',recipe);
        if(newRecipe!==null && newRecipe.trim()!==''){
            const recipeIndex = recipies.indexOf(recipe);
            recipies[recipeIndex] = newRecipe; 
            l.firstChild.textContent = newRecipe; 
            recipe= newRecipe; 
        }
        }
        l.appendChild(editButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function(){
            recipeList.removeChild(l);
            const recipeIndex = recipies.indexOf(recipe);
            recipies.splice(recipeIndex,1);
            difficulties.splice(recipeIndex,1);
        };
        l.appendChild(removeButton);

        recipeList.appendChild(l);

        recipeInput.value = '';
        difficultyInput.value ='';
    
    } else {
        alert("enter a valid recipe or enter a valid difficulty level")

    } 
}