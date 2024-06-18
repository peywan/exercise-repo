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
let headerTitle = (document.getElementById('header-title'))
let header = (document.getElementById('main-header'))



header.style.borderBottom = "solid 2px black"
