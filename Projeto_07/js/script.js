// Selecionar container
const container = document.querySelector(".container");
// Selecionar o botão
const qrCodeBtn = document.querySelector("#qr-form button");
// Selecionar a informação que vai gerar o QR Cod (input)
const qrCodeInput = document.querySelector("#qr-form input")
// Selecionar a imagem
const qrCodImg = document.querySelector("#qr-code img")

// eventos
/*  Gerar QR Code */
function generateQrCode(){
    /* Obtendo o valor do input */
    const qrCodInputValue = qrCodeInput.value;

    /* Verificar se não houver informação */
    if(!qrCodInputValue) return;

    /* Enquando esperamos a resposta da api informar no botão */
    qrCodeBtn.innerHTML = "Gerando código ...";

    /* Passando a informação para API gerar */
    qrCodImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodInputValue}` 

    qrCodImg.addEventListener("load", () =>{
        container.classList.add("active");
        qrCodeBtn.innerHTML = "Código criado";
    })
}

qrCodeBtn.addEventListener("click",() =>{
    generateQrCode();
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode();
    }
})

/* Limpar área do qr code */
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerHTML = "Gerar Qr Cod";
    }
});
