// Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

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
    const passwordLengh = 10
    const generators =[getLetterLowerCase,getLetterUpperCase,getNumber,getSymbol]

    for(i=0;i < passwordLengh;i = i + 4){
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