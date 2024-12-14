// Seleção de Elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
// parte do todo avançado
const searchInput = document.querySelector("#search-input");
const eraseBTN = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

/* Variável para guardar Titulo para alteração */
let oldInputValue;

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

// Organizando o formulário para editar tarefa
const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};

const updateTodo = (texto) =>{
    /* Obter Listagem de todo */
    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3")
        if (todoTitle.innerText === oldInputValue){
            todoTitle.innerText = texto
        }
    })
}

// Identificar de onde vem o click para tomar a ação correta
document.addEventListener("click", (e) =>{
    /* Elemento */
    const targetEl = e.target;
    /* Pai do Elemento */
    const parentEl = targetEl.closest("div");
    /* Titulo da Tarefa */
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    /* Finalizar tarefa */
    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
    }
    /* Remover tarefa */
    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }
    /* Editar uma tarefa */
    if(targetEl.classList.contains("edit-todo")){
        /* Ocultar parte de lançamento da tarefa */
        toggleForms();
        editInput.value=todoTitle;
        oldInputValue=todoTitle;
    }

})

/* Configurar o botão cancelar edição do todo */
cancelEditBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    toggleForms();
})

/* Guardar alteração realizada no todo */
editForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    //obtendo o valor editado
    const editInputValue = editInput.value

    if (editInputValue){
        updateTodo(editInputValue);
    }

    toggleForms();

})

const getSearchTodos = (texto) => {
    /* Obter Listagem de todo */
    const todos = document.querySelectorAll(".todo")
    /* Padronizar o texto para buscar */
    const pdTexto = texto.toLowerCase();

    todos.forEach((todo) => {
        /* Obter Tarefa e padronizar para comparação */
        let todoTitle = todo.querySelector("h3").innerText.toLowerCase();
        
        todo.style.display="flex";
        
        if (!todoTitle.includes(pdTexto)){
            todo.style.display = "none";
        }
    })
};

const filterTodos = (texto) => {
    /* Obter Listagem de todo */
    const todos = document.querySelectorAll(".todo")

    switch(texto) {
        case "all":
            todos.forEach((todo) => todo.style.display="flex")
            break

        case "done":
            todos.forEach((todo) => 
                todo.classList.contains("done") 
                ? (todo.style.display="flex")
                : (todo.style.display="none")
            );
            break
        case "todo":
            todos.forEach((todo) => 
                !todo.classList.contains("done") 
                ? (todo.style.display="flex")
                : (todo.style.display="none")
            );
            break
    }
}



// Eventos
todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const inputValue = todoInput.value;
    if (inputValue){
        saveTodo(inputValue)
    }
});

/* Caixa de Texto para procurar */
searchInput.addEventListener("keyup", (e) =>{
    //Obtendo o valor a procurar
    const search = e.target.value;

    getSearchTodos(search);

});

/* Limpar pesquisa */
eraseBTN.addEventListener("click", (e) => {
    e.preventDefault();

    searchInput.value = "";

    searchInput.dispatchEvent(new Event("keyup"));
});

/* Filtrar lista */
filterBtn.addEventListener("change", (e) => {
    const filterValue = e.target.value;
    filterTodos(filterValue);
});