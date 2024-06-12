// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
/* obtendo a tabela de multiplicação */
const multiplicationTable = document.querySelector("#multiplication-operations")

/* Obtendo o span para informar qual é a tabuada executada */
const multiplicationTitle = document.querySelector("#multiplication-title span")

// Funções
const createTable = (number,multiplicatorNumber) => {
    /* Limpar área da Tabuada  */
    multiplicationTable.innerHTML="";

    /* Gerar a tabuada */ 
    for(i=1;i<= multiplicatorNumber;i++){
        const result = number * i;
        
        /* Gerar template string */
        const template = `<div class="row">
            <div class="operation"> ${number} * ${i} = </div>
            <div class=result>${result}</div>
        </div>;`

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template,"text/html");
        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);
    }
    multiplicationTitle.innerHTML = number;
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    // Validar preenchimento dos numeros
    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber,multiplicatorNumber);

})