const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const inputDate = document.getElementById("input-date");

function addTask()
{
    if(inputBox.value === '')
    {
        alert("You must write something!");
    }
    else
    {
        let li = document.createElement("li");
        let dateSpan = document.createElement("span");
        let span = document.createElement("span");

        li.innerHTML = inputBox.value;
        span.innerHTML = "\u00d7";
        dateSpan.innerHTML = inputDate.value;

        span.className = "spanDelete";
        dateSpan.className = "spanDate";

        li.appendChild(span);
        li.appendChild(dateSpan);

        listContainer.appendChild(li);

    }
    inputDate.value = "";
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN")
    {
        const taskElement = e.target.parentElement;
        const dateElement = taskElement.nextElementSibling;
        taskElement.remove();
        dateElement.remove();
        saveData()
    }
}, false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()

function deleteAllTasks()
{
    listContainer.innerHTML = "";
    localStorage.clear();   
}


inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addTask();
    }
});