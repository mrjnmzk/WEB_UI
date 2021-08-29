/task1/

const list = document.querySelectorAll("#list li");
    alert(list[0].innerHTML);
    alert(list[4].innerHTML);
    alert(list[1].innerHTML);
    alert(list[3].innerHTML);
    alert(list[2].innerHTML);
   
    console.log(document.getElementById("list").firstElementChild.innerHTML);
    console.log(document.getElementById("list").lastElementChild.innerHTML);
    console.log(document.getElementById("list").firstElementChild.nextElementSibling.innerHTML);
    console.log(document.getElementById("list").lastElementChild.previousElementSibling.innerHTML);
    console.log(document.getElementById("list").lastElementChild.previousElementSibling.previousElementSibling.innerHTML);

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

let lists = document.getElementById("myList");
let listElem = lists.children;
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