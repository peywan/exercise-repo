let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter")

//form submit event
form.addEventListener("submit", addItem)

//delete event
itemList.addEventListener("click", removeItem)

//filter
filter.addEventListener("keyup", filterItems)

function addItem(e) {
    e.preventDefault();

    //get input value
    let newItem = document.getElementById("item").value;
    //create new li element
    let li = document.createElement("li")

    //add class
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    //add text node with input value
    li.appendChild(document.createTextNode(newItem))

    //create delete button element

    let deleteBtn = document.createElement("button");

    //add classes to del button
    deleteBtn.className = "btn btn-danger btn-sm delete"


    //append text node
    deleteBtn.appendChild(document.createTextNode("x"))

    //append button to li
    li.appendChild(deleteBtn)

    //append li to list
    itemList.appendChild(li)
}


//remove item
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm('are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}


function filterItems(e) {
    //convert text to lowercase
    let text = e.target.value.toLowerCase()
    console.log(text)
    //get list
    let items = itemList.getElementsByTagName("li")
    console.log(items)

    //convert items to an array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) !== -1){
            console.log(itemName)
        }
    })
}
