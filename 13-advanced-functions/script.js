// classic
const addBtn = document.getElementById("add-button");
const inputField = document.getElementById("todo-input");

addBtn.addEventListener("click", () => {
    console.log(
        "🚀 ~ addBtn.addEventListener ~ inputField.value:",
        inputField.value.trim()
    );
});

// secure

// (() => {
//     const addBtn = document.getElementById("add-button");
//     const inputField = document.getElementById("todo-input");

//     addBtn.addEventListener("click", () => {
//         console.log(
//             "🚀 ~ addBtn.addEventListener ~ inputField.value:",
//             inputField.value.trim()
//         );
//     });
// })();
