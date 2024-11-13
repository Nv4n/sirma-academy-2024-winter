//@ts-check

// classic
// const addBtn = document.getElementById("add-button");
// const inputField = document.getElementById("todo-input");

// addBtn.addEventListener("click", () => {
//     console.log(
//         "🚀 ~ addBtn.addEventListener ~ inputField.value:",
//         inputField.value.trim()
//     );
// });

// secure

(() => {
    const addTodoBtn = document.getElementById("add-button");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    if (!addTodoBtn) {
        throw new Error("No add button found!");
    }
    if (!todoInput) {
        throw new Error("No input field found!");
    }
    if (!todoList) {
        throw new Error("No todo list found!");
    }

    addTodoBtn.addEventListener("click", () => {
        addNewTodo(todoInput, todoList);

        console.log(
            "🚀 ~ addBtn.addEventListener ~ inputField.value:",
            // @ts-ignore
            todoInput.value.trim()
        );

        // @ts-ignore
        todoInput.value = "";
    });
})();

/**
 *
 * @param {HTMLElement} inputField
 * @param {HTMLElement} list
 */
function addNewTodo(inputField, list) {
    const item = document.createElement("li");

    const text = document.createElement("span");
    // @ts-ignore
    text.textContent = inputField.value.trim();

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "REMOVE";
    removeBtn.addEventListener("click", () => {
        list.removeChild(item);
    });
    removeBtn.classList.add("remove-button");

    item.appendChild(text);
    item.appendChild(removeBtn);

    list.appendChild(item);
}
