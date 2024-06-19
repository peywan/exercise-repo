/* examine the document object
 console.dir(document)
console.log(document.all)
console.log(document.URL)
console.log(document.title)
// document.title = 111123;
console.log(document.doctype)
console.log(document.head)
*/
//console.log(document.forms[0])
//console.log(document.links)
//console.log(document.images)

/*
//selectors GETELEMENTBYID
console.log(document.getElementById('header-title'))
console.log(headerTitle.innerText)
headerTitle.innerHTML = '<h3>hello</h3>'
//textcontect, innerhtml, innertext
*/

//let headerTitle = (document.getElementById('header-title'))
//let header = (document.getElementById('main-header'))
//header.style.borderBottom = "solid 2px black"


//GETELEMENTSBYCLASSNAME
/*
let items = document.getElementsByClassName('list-group-item')

console.log(items);
console.log(items[2]);
items[2].textContent = "hello hello hello 2";
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = "yellow";


//gives error
//items.style.backgroundColor = "grey"


//works
for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = "grey"
}
*/

/*
//GETELEMENTSBYTAGNAME//
let li = document.getElementsByTagName('li')

console.log(li);
console.log(li[2]);
li[2].textContent = "hello hello hello 2";
li[2].style.fontSize = '26px';
li[2].style.backgroundColor = "yellow";

//works
for(let i = 0; i < li.length; i++){
    li[i].style.backgroundColor = "grey"
}
*/

/*
//QUERYSELECTOR

let header = document.querySelector("#main-header")

header.style.borderBottom= "solid 4px black"

var input = document.querySelector("input")
input.value = 'hello world';

input.style.textAlign = 'center'
let submit = document.querySelector('input[type=submit]')

submit.value = "SEND!"

let item = document.querySelector(".list-group-item")
item.style.color = "green"

let lastItem  = document.querySelector(".list-group-item:last-child")
lastItem.style.color = 'blue'

let secondItem  = document.querySelector(".list-group-item:nth-child(2)")
secondItem.style.color = 'coral'

let titles = document.querySelectorAll(".title");

console.log(titles)

titles[0].textContent="hello"


let even = document.querySelectorAll("li:nth-child(even)")
let odd = document.querySelectorAll("li:nth-child(odd)")

for(let i = 0; i < odd.length; i++){
    even[i].style.backgroundColor = "lightgrey"

    odd[i].style.backgroundColor = "lightblue"
}
*/


//traversing the dom
let itemList = document.querySelector("#items")
//parent node property.
/*
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = "lightGrey"
console.log(itemList.parentNode.parentNode)
*/


/*
// PARENTELEMENT
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = "lightGrey"
console.log(itemList.parentElement.parentElement)
*/

/*
//ChildNodes
//not good to use
//console.log(itemList.childNodes)

//better to use (html collection of nodelist) best practice.
console.log(itemList.children)

console.log(itemList.children[2])
itemList.children[2].style.backgroundColor = "red"
//not what you should use
console.log(itemList.firstChild)
//what you should use instead
console.log(itemList.firstElementChild)

itemList.firstElementChild.style.backgroundColor = " green"

*/


/*
//nextSibling and nextElementSibling
console.log(itemList.nextElementSibling)

itemList.nextElementSibling.style.fontSize = "32px"
*/

/*
//previousSibling
console.log(itemList.previousSibling)
console.log(itemList.previousElementSibling)

itemList.previousElementSibling.style.color = "blue"
*/
/*
let newDiv = document.createElement("div");
newDiv.className = "hello"


//add id name to newDiv
newDiv.id= "hello2"

//add attribute
newDiv.setAttribute("title", "hello div")


//create text node
let newDivText = document.createTextNode("the new div text")

//add text to div
newDiv.appendChild(newDivText)


//put the newDiv to the dom
let insideContainer = document.querySelector("header .container")
let h1 = document.querySelector("header h1")

insideContainer.insertBefore(newDiv, h1)



newDiv.style.fontSize = "26px"

console.log(newDiv)

*/


/// very import for interactive - mouse events, key events  interactive javascript event listeners and such.


let button = document.getElementById("button");
button.addEventListener('click', buttonClick);


function buttonClick(e) {
    console.log("button clicked");
    document.getElementById("header-title").textContent = "Hey Peywan  you clicked the button, magic! welcome to your to do list!"

    document.getElementById("header-title").style.backgroundColor = "red";
    document.querySelector("#main").style.backgroundColor ="red"

}





