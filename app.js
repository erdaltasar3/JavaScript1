// Seciciler

// ! classname , id , tag name


const todoList = Array.from(document.getElementsByClassName("list-group-item"));

todoList.forEach(todo => {
    console.log(todo.textContent);
});



console.log(todoList);