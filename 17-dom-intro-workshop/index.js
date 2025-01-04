(() => {
    const addTaskBtn = document.getElementById("add-btn");
    const resetBtn = document.getElementById("reset-btn");
    const todoInput = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");
    const clearBtn = document.getElementById("clear-btn");

    /** @type {{id:number,value:string}[]} */
    const todoList = getTodoList(); // {id, value}[]

    todoList.map(({ id, value }) => {
        const todoHtmlEl = createTodo(id, value);
        list.appendChild(todoHtmlEl);
    });

    addTaskBtn.addEventListener("click", addTask);
    resetBtn.addEventListener("click", () => {
        todoInput.value = "";
    });
    document.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
    clearBtn.addEventListener("click", () => {
        list.replaceChildren();
        localStorage.setItem("todoList", "{}");
    });

    function addTask() {
        if (todoInput.value.length > 0) {
            const newTodo = createTodo();
            list.appendChild(newTodo);
            todoInput.value = "";
        }
    }

    function getTodoList() {
        const listJson = localStorage.getItem("todoList") || "{}";
        const list = JSON.parse(listJson);

        if (list && list.length > 0) {
            return list;
        }
        return [];
    }

    function deleteFromLocalStorage(id) {
        const newList = todoList.filter((item) => item.id !== id);
        localStorage.setItem("todoList", JSON.stringify(newList));
    }

    function createDeleteBtn(id) {
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerText = "X";
        deleteBtn.addEventListener("click", () => {
            const el = document.getElementById(id);
            el?.remove();
            deleteFromLocalStorage(id);
        });

        return deleteBtn;
    }

    function createTodo(id, value) {
        const uid = id ? id : Math.floor(Math.random() * 1000);
        const todo = document.createElement("li");
        todo.className = "todo-item";
        todo.textContent = value ? value : todoInput.value;
        todo.id = uid;
        const deleteBtn = createDeleteBtn(uid);

        todo.appendChild(deleteBtn);
        if (!id && !value) {
            // writes the changes in local storage
            saveToLocalStorage(uid, todoInput.value);
        }
        return todo;
    }

    function saveToLocalStorage(id, value) {
        const data = { id, value };
        todoList.push(data);

        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
})();
