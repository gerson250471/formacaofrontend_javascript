// Seleção de Elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Funções
/* Colocar a Tarefa na lista */
const saveTodo = (text) =>{
    /* criar template para inserção */
    const todo = document.createElement("div")
    /* adicionar a classe */
    todo.classList.add("todo")
    /* criar o título*/
    const todoTitle = document.createElement("h3")
    /* adicionar o texto que foi enviado */
    todoTitle.innerText = text
    /* Colocar o h3 no todo */
    todo.appendChild(todoTitle)
    /* colocar os botões */
    
    // Primeiro Botão
    const doneBtn = document.createElement("button")
    /* colocar a classe do botão */
    doneBtn.classList.add("finish-todo")
    /* colocar ícone do botão */
    doneBtn.innerHTML ='<i class="fa-solid fa-check"></i>'
    /* colocar o botão no toto */
    todo.appendChild(doneBtn)
    
    // Segundo botão
    const editBtn = document.createElement("button")
    /* colocar a classe do botão */
    editBtn.classList.add("edit-todo")
    /* colocar ícone do botão */
    editBtn.innerHTML ='<i class="fa-solid fa-pen"></i>'
    /* colocar o botão no toto */
    todo.appendChild(editBtn)

    // Terceiro botão
    const deleteBtn = document.createElement("button")
    /* colocar a classe do botão */
    deleteBtn.classList.add("remove-todo")
    /* colocar ícone do botão */
    deleteBtn.innerHTML ='<i class="fa-solid fa-xmark"></i>'
    /* colocar o botão no toto */
    todo.appendChild(deleteBtn)

    /* Colocar o Todo na lista Geral */
    todoList.appendChild(todo)

    /* Limpar valor no formulário e colocar foco */
    todoInput.value="";
    todoInput.focus();
}

/* Marcar Tarefa como completada */
// Identificar de onde vem o click
document.addEventListener("click", (e) =>{
    /* Elemento */
    const targetEl = e.target;
    /* Pai do Elemento */
    const parentEl = targetEl.closest("div");

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }

})


// Eventos
todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const inputValue = todoInput.value;
    if (inputValue){
        saveTodo(inputValue)
    }
})



