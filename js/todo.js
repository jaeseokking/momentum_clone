const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY  , JSON.stringify(toDos));
}


function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    console.log(li.id)
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    saveToDos();
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText ="X";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //깊은 복사
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj); //로컬에 저장
    paintToDo(newTodoObj); //html에 저장
    saveToDos();

}


toDoForm.addEventListener("submit", handleToDoSubmit)


const savedToDos = localStorage.getItem(TODOS_KEY)
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
