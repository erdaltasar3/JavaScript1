

const clearButton = document.querySelector("#todoClearButton");

addEventListener("click", changeTitle)




function changeTitle(){
    document.querySelectorAll(".card-title")[1].textContent="Todo Basligi Degistiii";
}