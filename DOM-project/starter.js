let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

//form submit event
form.addEventListener("submit", addItem)

function addItem(e){
    e.preventDefault();
}
