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