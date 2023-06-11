// Get references to HTML elements
const todoInput = document.querySelector("#todoInput");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");

// Add event listener to the add button
addButton.addEventListener("click", function() {
  const todoText = todoInput.value;

  // Create a new list item
  const listItem = document.createElement("li");
  listItem.textContent = todoText;

  // Append the new list item to the todo list
  todoList.appendChild(listItem);

  // Clear the input field
  todoInput.value = "";
});
