let movies = [];
let priorities = [];

function addMovie() {
    const movieInput = document.getElementById('movie');
    const priorityInput = document.getElementById('priority');

    let movie = movieInput.value.trim();
    let priority = Number(priorityInput.value.trim());
    if(movie!==''&& !isNaN(priority) && priority>=1 && priority <=3){
        movies.push(movie);
        priorities.push(priority);
        let l=document.createElement("li");
        l.textContent=movie;

        switch(priority){
            case 1: 
                l.classList.add('priority-high');
                break;
            case 2:
                l.classList.add('priority-medium');
                break;
            case 3:
                l.classList.add('priority-low');
                break;
        }

        const watchedButton = document.createElement('button');
        watchedButton.textContent = 'Watched';
        watchedButton.onclick = function(){
            l.classList.toggle('watched');
        };
        l.appendChild(watchedButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function(){
        const newMovie = prompt('Edit Movie: ',movie);
        if(newMovie!==null && newMovie.trim()!==''){
            const movieIndex = movies.indexOf(movie);
            movies[movieIndex] = newMovie; 
            l.firstChild.textContent = newMovie; 
            movie = newMovie; 
            }
        };
        l.appendChild(editButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function(){
            movieList.removeChild(l);
            const movieIndex = movies.indexOf(movie);
            movies.splice(movieIndex,1);
            priorities.splice(movieIndex,1);
        };
        l.appendChild(removeButton)

        movieList.appendChild(l);
        movieInput.value = '';
        priorityInput.value ='';
    } else{
        alert('Please enter a valid task and a priority between 1 and 3');
    }
}
