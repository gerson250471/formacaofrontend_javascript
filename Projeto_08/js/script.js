/* Selecionar o objeto desejado */
const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        
        /* remover seleção do botão */
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected")
        })

        /* Obter o target e o ID do botão selecionado */
        const button = e.target;
        const id = button.getAttribute("id");
        console.log(id);

        /* Colocar a seleção no botão acionado */
        button.querySelector(".color").classList.add("selected")

        /* Trocar imagem */
        image.classList.add("changing");
        image.setAttribute("src",`img/iphone_${id}.jpg`);
        setTimeout(() => {
            image.classList.toggle("changing");
        },200);
    })
})
