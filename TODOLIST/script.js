const newItem = document.getElementById('newItem');
const addBtn = document.querySelector(".add-item button");
const input = document.querySelector(".add-item input");
const list = document.querySelector(".todo-list");

function addItem() {
    if (input.value === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    span.textContent = input.value;
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
}

addBtn.addEventListener("click", addItem);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});
