let todolist = [{
  arrayName:'',
  date:''
} ];

const savedList = localStorage.getItem("todolist");
if (savedList) {
  todolist = JSON.parse(savedList);
}

function addarray() {
  let final = "";
  for (let i = 0; i < todolist.length; i++) {
    const todoObject = todolist[i];
    const {arrayName , date}=todoObject;
    const showpargraph = `<div class="border-list-option">
          <p class="option"><span draggable="true" class="date-cs">${arrayName} </span><span draggable="true" class="date-cs">${date}</span></p>
          <button class="delete-button" onclick="
          deleteItem(${i})
          ">
            <div class="tooltip-delete">You Sure?</div>
            Delete
          </button>
        </div>`;
    final += showpargraph;
  }

  document.querySelector(".js-list-options").innerHTML = final;
}

function todolistAdd() {
  const inputAddElement = document.querySelector(".js-add-bar");
  const arrayName = inputAddElement.value;
  const dateInputElement = document.querySelector('.js-date-input'); 
  const date= dateInputElement.value;
  todolist.push({
    arrayName,
    date
  });
  localStorage.setItem("todolist", JSON.stringify(todolist));
  inputAddElement.value = "";
  addarray();
}

function deleteItem(i) {
  todolist.splice(i, 1);
  localStorage.setItem('todolist', JSON.stringify(todolist));
  addarray();
}

function resetList() {
  todolist = [];
  localStorage.removeItem("todolist");
  addarray();
}

function enterKey(event) {
  if (event.key === "Enter") {
    todolistAdd();
  }
}
addarray();
