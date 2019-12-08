const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

const list = document.querySelector("ul");

function handleSubmit(event) {
  event.preventDefault();
  const value = event.target.elements.newTodo.value;

  const newItem = document.createElement("li");
  newItem.textContent = value;
  newItem.classList.add("list-group-item"); 
  newItem.classList.add("bg-info");
  newItem.classList.add("border-light");
  newItem.classList.add("text-white");
  list.appendChild(newItem);

  form.reset();
}