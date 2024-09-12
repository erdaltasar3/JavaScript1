// dinamik olarak element oluşturmak

const cardBody = document.querySelectorAll(".card-body")[1];
const listGroup = document.querySelector(".list-group");

const link = document.createElement("a");

link.id = "GoGoogle";
link.className="btn btn-dark btn-sm mt-3";
link.href="https://www.google.com/"
link.target="_blank"
link.innerHTML="Google'a git"


const li = document.createElement("li");
li.className="list-group-item d-flex justify-content-between";
li.innerHTML="Todo 5";

const a = document.createElement("a");
a.className="delete-item";
a.href="#"

const i = document.createElement("i");
i.className="fa fa-remove";


a.appendChild(i);
li.appendChild(a);

listGroup.appendChild(li);