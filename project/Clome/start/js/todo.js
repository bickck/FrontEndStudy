const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
const toDos_Key = "todos";

let toDos = [];


function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
   
    // 여기에 백엔드에게 데이터 지워달라고 신호를 보내면 됌
    // 백엔드에서 신호 보내진 것으로 DB데이터에 지워버리면 끝?
}

function saveToDos() {
    localStorage.setItem(toDos_Key,JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

function handleTodoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(toDos_Key);

if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.array.forEach(paintToDo);
}