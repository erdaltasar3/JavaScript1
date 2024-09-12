// HTML Elementleri üzerinde gezinmek.

const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");

const card = document.querySelector(".card");


let value;

// anneden çocuklara erişmek

value = todoList;
value = todoList.children;


// çocuktan anneye erişmek

value = todo;
let ul = todo.parentElement;
let cardBody = ul.parentElement;


// kardeşler arasında gezinmek

value = todo;
value = todo.nextElementSibling;
value = value.previousElementSibling


console.log(value);