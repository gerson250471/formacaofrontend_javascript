// Dados IMC
const data = [
    {
        min:0,
        max:18.4,
        classification:"Menor que 18,5",
        info:"Magreza",
        obesity:"0",
    },
    {
        min:18.5,
        max:24.9,
        classification:"Entre 18,5 e 24,9",
        info:"Normal",
        obesity:"0",
    },
    {
        min:25,
        max:29.9,
        classification:"Entre 25.0 e 29,9",
        info:"Sobrepeso",
        obesity:"I",
    },
    {
        min:30,
        max:39.9,
        classification:"Entre 30.0 e 39,9",
        info:"Obesidade",
        obesity:"II",
    },
    {
        min:40,
        max:99.9,
        classification:"Maior que 40.0",
        info:"Obesidade Grave",
        obesity:"III",
    },
];

// Seleção de elementos
const imcTable = document.querySelector("#imc-table");

const heighInput = document.querySelector("#height");
const weighInput = document.querySelector("#weight");
const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");

// Funções
/* Criar tabela com as informações do IMC */
function createTable(data) {
    /* Criar a Div */
    const div = document.createElement("div");
    /* criar a classe */
    div.classList.add("table-data");

    /* Criar os parágrafos */
    const classification = document.createElement("p");
    classification.innerText = item.classification;

    const info = document.createElement("p");
    info.innerText = item.classification;

    const obesity = document.createElement("p");
    obesity.innerText = item.classification;

    /* Colocar a informação na Div */
    div.appendChild(classification);
    div.appendChild(info);
    div.appendChild(obesity);

    /* Colocar no Formulário */
    imcTabe.appendChild(div);
}

 /* Limpeza dos dados */
function clearInputs() {
    heighInput.value = "";
    weighInput.value = "";
}

/* Permitir apenas numeros e virgula */
function validDigits(text){
    return text.replace(/[^0-9,]/g, "");
}

// Inicialização
createTable(data);

// Eventos
[heighInput, weighInput].forEach((el) => {
    el.addEventListener("input", (e) => {
        const updatedValue = validDigits(e.target.value);

        e.target.value = updatedValue;
    });
});

clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearInputs();
})