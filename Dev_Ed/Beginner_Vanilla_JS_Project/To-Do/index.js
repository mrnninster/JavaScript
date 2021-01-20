// Selectors
const Todo_input = document.querySelector(".todo_input");
const Todo_button = document.querySelector(".todo_button");
const Todo_list = document.querySelector(".todo_list");

// Event Listeners

// Todo Button Event Listener
Todo_button.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  event.preventDefault();

  // Create ToDo Div
  const Todo_Div = document.createElement("div");
  Todo_Div.classList.add("todo");

  // Todo List Item
  const Todo_item = document.createElement("li");
  Todo_item.innerText = "Temporary Text";
  Todo_item.classList.add("todo_item");
  Todo_Div.appendChild(Todo_item);

  //   // Content Passed  From Form
  //   const Todo_content = Todo_input.Value;
  //   Todo_item.appendChild(Todo_content);

  // Task Complete Button
  const complete_todo = document.createElement("button");
  complete_todo.innerHTML = "<i class='fas fa-check'></i>";
  complete_todo.classList.add("complete-btn");
  Todo_Div.appendChild(complete_todo);

  // Task Remove Button
  const remove_todo = document.createElement("button");
  remove_todo.innerHTML = "<i fas fa-trash></i>";
  remove_todo.classList.add(reove - btn);
  Todo_Div.appendChild(remove_todo);
}
