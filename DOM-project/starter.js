let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

// Filter event
filter.addEventListener("keyup", filterItems);

function addItem(e) {
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById("item").value;

    // Create new li element
    let li = document.createElement("li");

    // Add class
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    let deleteBtn = document.createElement("button");

    // Add classes to delete button
    deleteBtn.className = "btn btn-danger btn-sm delete";

    // Append text node
    deleteBtn.appendChild(document.createTextNode("X"));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    // Convert text to lowercase
    let text = e.target.value.toLowerCase();

    // Get list items
    let items = itemList.getElementsByTagName("li");

    // Convert items to an array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent.trim();

        if (itemName.toLowerCase().indexOf(text) !== -1) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
}
