/task1/

let listElems = document.querySelector("#list");
let elemFirst = listElems.firstElementChild;
let elemLast = listElems.lastElementChild;
let elem2 = elemFirst.nextElementSibling;
let elem3 = elem2.nextElementSibling;
let elem4 = elemLast.previousElementSibling;

console.log(elemFirst.innerHTML, elemLast.innerHTML, elem2.innerHTML, elem4.innerHTML, elem3.innerHTML);

alert(elemFirst.innerHTML);
alert(elemLast.innerHTML);
alert(elem2.innerHTML);
alert(elem4.innerHTML);
alert(elem3.innerHTML);

/task2/

let h = document.getElementsByTagName("h1")[0];
h.style.backgroundColor = "green";

let p1 = document.getElementsByTagName("p")[0];
p1.style.fontWeight = "bold";

let p2 = document.getElementsByTagName("p")[1];
p2.style.color = "red";

let p3 = document.getElementsByTagName("p")[2];
p3.style.textDecoration = "underline";

let p4 = document.getElementsByTagName("p")[3];
p4.style.fontStyle = "italic";

let list = document.getElementById("myList");
let listElem = list.children;
for (let i = 0; i < listElem.length; i++) {
    listElem[i].style.display = "inline"
}

document.querySelector("span").style.visibility = "hidden";

/task3/

function pressBtn(event) {
    let message = document.createElement("p");
    if (event.type == "click") {
        message.innerHTML = "I was pressed";
    } else if (event.type == "mouseover") {
        message.innerHTML = "Mouse on me!";
    } else if (event.type == "mouseout") {
        message.innerHTML = "Mouse is not on me!"
} 
let messages = document.getElementById("messages")
messages.appendChild(message)
}
liveBtn.addEventListener("click", pressBtn);
liveBtn.addEventListener("mouseover", pressBtn);
liveBtn.addEventListener("mouseout", pressBtn);