const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('listcontainer');
const todo = document.querySelector('.todo h2');

function addTask() {
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData()
    }
    inputbox.value = "";
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

inputbox.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        addTask();
    }
});

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showData() {
    listcontainer.innerHTML = localStorage.getItem('data');
}
showData();

todo.addEventListener('click', function(){
    listcontainer.innerHTML = "";
    saveData();
})