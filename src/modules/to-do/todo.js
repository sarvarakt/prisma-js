const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
         <span>${input.value}</span>
<button onclick="this.parentElement.remove()" style="background:none; border:none; cursor:pointer;">❌</button>`; 
    li.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") li.classList.toggle("completed");
    });
    todoList.appendChild(li);
    input.value = "";
  }
});
