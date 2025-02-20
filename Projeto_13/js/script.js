// Elementos
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");
const searchInput = document.querySelector("#search-input")

// Funções
function showNotes(){

    cleanNotes();

    getNotes().forEach((note) => {
        const noteElement = createNote(note.id,note.content,note.fixed);
        notesContainer.appendChild(noteElement);
    });
}

function cleanNotes(){
    notesContainer.replaceChildren([]);
}

function addNote() {
    const notes = getNotes();
    const noteObject = {
        id: generateId(),
        content:noteInput.value,
        fixed:false,
    };
    
    const noteElement = createNote(noteObject.id,noteObject.content);
    notesContainer.appendChild(noteElement);

    notes.push(noteObject);
    saveNotes(notes);
    noteInput.value="";
};

function generateId(){
    return Math.floor(Math.random()*5000);
}

function createNote(id,content,fixed){
    const element = document.createElement("div");
    element.classList.add("note");
    const textarea = document.createElement("textarea");
    textarea.value=content;
    textarea.placeholder = "Adiciona algum texto ...";
    element.appendChild(textarea);

    /* Ícone de Fixar o Elemento */
    const pinIcon = document.createElement("i");
    pinIcon.classList.add(...["bi", "bi-pin"]);
    element.appendChild(pinIcon);

    /* Ícone de Apagar o elemento */
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add(...["bi", "bi-x-lg"]);
    element.appendChild(deleteIcon);

    /* Ícone de Duplicar o Elemento */
    const duplicateIcon = document.createElement("i");
    duplicateIcon.classList.add(...["bi", "bi-file-earmark-plus"]);
    element.appendChild(duplicateIcon);

    if (fixed){
        element.classList.add("fixed");
    }

    // Eventos do Elemento
    /* Fixar Elemento */
    element.querySelector(".bi-pin").addEventListener("click", () => {
        toggleFixNote(id);
    })

    /* Apagar Elemento */
    element.querySelector(".bi-x-lg").addEventListener("click", () =>  {
        deleteNote(id,element);
    });

    /* Copiar Elemento */
    element.querySelector(".bi-file-earmark-plus").addEventListener("click", () => {
        copyNote(id);
    });

    /* Atualizar Notas */
    element.querySelector("textarea").addEventListener("keyup", (e) => {
    const noteContent = e.target.value

    updateNote(id,noteContent);
});

    return element;
}

/* Fixar o Elemento */
function toggleFixNote(id){
    const notes = getNotes();

    const targetNote = notes.filter((note) => note.id === id)[0];
    targetNote.fixed = !targetNote.fixed;
    saveNotes(notes);
    showNotes();
}

// Local Storage
/* Fixar Notas e Ordenar dando prioridade para as notas fixas */
function getNotes(){
    const notes= JSON.parse(localStorage.getItem("notes") || "[]");
    const orderedNotes = notes.sort((a,b) => (a.fixed > b.fixed ? -1:1));
    return orderedNotes;
}

/* Salvar Notas */
function saveNotes(notes){
    localStorage.setItem("notes",JSON.stringify(notes));
}

// Ações dos Elementos

/* Procurar Nota */
function searchNotes(search){
    const searchResults = getNotes().filter((note) => {
       return note.content.includes(search);
    });

    if (search !== "") {
        cleanNotes();

        searchResults.forEach((note) => {
            const noteElement = createNote(note.id,note.content);
            notesContainer.appendChild(noteElement);
        });

        return
    }
    cleanNotes();
    showNotes();
}

/* Adicionar Nota */
addNoteBtn.addEventListener("click", () =>{
    addNote()
});

/* Apagar Nota */
function deleteNote(id,element){
    const notes = getNotes().filter((note) => note.id !== id);

    saveNotes(notes);
    notesContainer.removeChild(element);
}

/* Copiar Nota */
function copyNote(id){
    const notes = getNotes();
    const targetNote = notes.filter((note) => note.id === id)[0];

    const noteObject = {
        id: generateId(),
        content: targetNote.content,
        fixed: false,
    };

    const noteElement = createNote(noteObject.id,noteObject.content,noteObject.fixed);

    notesContainer.appendChild(noteElement);
    notes.push(noteObject);
    saveNotes(notes);
}

/* Atualizar Notas */
function updateNote(id,newContent){
    const notes = getNotes();
    const targetNote = notes.filter((note) => note.id === id)[0]; 
    targetNote.content = newContent;
    saveNotes(notes);
}

/* Busca notas */
searchInput.addEventListener("keyup", (e) =>{
    const search = e.target.value;

    searchNotes(search);
})

/* Adicionar Nota ao apertar o Enter */
noteInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addNote();
    }
});

// Inicialização
showNotes();