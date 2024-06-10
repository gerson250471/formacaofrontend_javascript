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

// 06 - eventos da tecla
document.addEventListener("keyup",(e) => {
    console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown",(e) => {
    console.log(`Apertou a tecla ${e.key}`);
});

// 07 - eventos de mouse
const mouseEventos = document.querySelector("#mouse");

mouseEventos.addEventListener("mousedown", () => {
    console.log("Apertou o mouse");
});

mouseEventos.addEventListener("mouseup", () => {
    console.log("Soltou o mouse");
});

mouseEventos.addEventListener("dblclick", () => {
    console.log("Duplo click");
});

// 08 - movimento do mouse
document.addEventListener("mousemove", (e) =>{
    // console.log(`No eixo x ${e.x}`)
    // console.log(`No eixo y ${e.y}`)
});

// 09 - eventos scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
        console.log("Passei dos 200 px");
    };
});

// 10 - evento de focus / blur
const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) =>{
    console.log("Entrou no focus");
});

input.addEventListener("blur", (e) =>{
    console.log("Saiu do focus");
});

// 11 - evento de carregamento
window.addEventListener("load", () => {
    console.log("Carregou a página")
});

window.addEventListener("beforeunload", (e) =>{
    e.preventDefault();
    e.returnValue = "Teste";
});

// 12 - debounce
const debounce = (f,delay) =>{
    let timeout;

    return (...arguments) =>{
        if(timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments);
        },delay);
    };
};

window.addEventListener("mousemove",debounce(() =>{
    console.log("Executando a cada 400 ms")
},400));
