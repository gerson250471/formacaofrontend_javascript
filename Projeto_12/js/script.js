// Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Novas Funcionalidades
/* Abrir tabela com escolhas novas senhas */
const openCloseGeneratorButton = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
/* Opção do Tamanho */
const lengthInput = document.querySelector("#length")
/* Opção das letras */
const lettersInput = document.querySelector("#letters")
/* Opção de números */
const numbersInput = document.querySelector("#numbers")
/* Opção de Simbolos */
const symbolsInput = document.querySelector("#symbols")
/* Botão de copiar Senha */
const copyPasswordButton = document.querySelector("#copy-password")

// Funcões
/* Gerar Letras */
const getLetterLowerCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26)+97);
};

const getLetterUpperCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26)+65);
};

/* Gerar Números */
const getNumber = () =>{
    return Math.floor(Math.random() * 10 ).toString()
}

/* Gerar Simbolos */
const getSymbol = () =>{
    const symbols = "(){}=<>/,.;!@#$%¨&*";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassword = (getLetterLowerCase,getLetterUpperCase,getNumber,getSymbol) => {
    let password = ""
    const passwordLengh = +lengthInput.value;
    const generators =[]

    /* Obtendo o valor das opções escolhidas */
    if(lettersInput.checked){
        generators.push(getLetterLowerCase,getLetterUpperCase);
    }

    if(numbersInput.checked){
        generators.push(getNumber);
    }

    if(symbolsInput.checked){
        generators.push(getSymbol);
    }

    if(generators.length===0){
        return;
    }

    for(i=0;i < passwordLengh;i = i + generators.length){
        generators.forEach(() =>{
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;
        });
    }
    password = password.slice(0,passwordLengh);
    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
};


// Eventos
generatePasswordButton.addEventListener("click",() =>{
    generatePassword(getLetterLowerCase,getLetterUpperCase,getNumber,getSymbol);
});

/* Mostrar ou ocultar Caixa de Opções de Senhas */
openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide");
});

/* Obtendo a senha gerada pelo sistema */
copyPasswordButton.addEventListener("click",(e) =>{
    e.preventDefault()

    const password = generatedPasswordElement.querySelector("h4").innerText

    navigator.clipboard.writeText(password).then(() => {
        copyPasswordButton.innerText="Senha Copiada com Sucesso";

        setTimeout(() => {
            copyPasswordButton.innerText = "Copiar";
        },1000);
    })
})