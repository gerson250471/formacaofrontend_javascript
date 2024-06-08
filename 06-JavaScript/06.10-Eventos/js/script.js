// 01 adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
    console.log("Você apertou o botão!");
});

// 02 - Removendo evento
const secondbtn = document.querySelector("#btn");
function imprimir () {
    console.log("Estou funcionando");
}

secondbtn.addEventListener("click",imprimir);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento foi removido");
    secondbtn.removeEventListener("click",imprimir);
});

// 03 - argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click",(e) => {
    console.log(e);
    console.log(e.offsetX);
    console.log(e.pointerType);
    console.log(e.target);

})

// 04 - propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2");
});

// 05 - removendo evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    
    console.log("Não alterou a página");
})