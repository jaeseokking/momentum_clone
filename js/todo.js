const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //깊은 복사
    toDoInput.value = "";
    paintToDo(newTodo);

}

toDoForm.addEventListener("submit", handleToDoSubmit)