// 01 - variáveis
let nome = "Gerson Bernardo da Silva";

console.log(nome);
nome="Gerson Silva";

const idade = 53;
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

// 02 - mais sobre variáveis
// let 2teste = "Inválido"
// let @teste = "Inválido"

let a=5,b=10,c=15;

console.log(a, b, c);

nomecompleto="Gerson Bernardo";
nomeCompleto="Marco Roberto";
console.log(nomecompleto);
console.log(nomeCompleto);

let _teste="ok";
let $teste="ok";

// 03 - prompt
// let nome1 = prompt("Informe sue nome");
// let idade1 = prompt("Informe sua Idade");

// console.log(`${nome1} tem ${idade1} anos.`);

// 04 - alert
//  alert("Teste") 

// 05 - Math
console.log(Math.max(10,2,3,4,24));
console.log(Math.floor(4.07));
console.log(Math.ceil(5.04));

// 06 - Console
console.log("Escreve no console");
console.error("Mostra o erro no console");
console.warn("Mostra  avisos no console");

// 07 - if
const m = 10;
if( m > 6 ){
    console.log("M é maior que 5")
}

const user = "João"
if (user=="João"){
    console.log("Saudações João")
}

if (user == "Maria"){
    console.log("Saudação Maria")
}

// 08 - Else
const loggedin = false;
if (loggedin){
    console.log("Usuário Autenticado")
} else {
    console.log("Usuário não está Autenticado")
}

// 09 - else if
if( 1 > 2 ){
    console.log("Teste");
} else if ( 2 > 3 ){
    console.log("Teste 2");
} else if ( 5 > 1 ){
    console.log("Agora sim");
}

// 10 - while
let p = 0;
while (p < 5){
    console.log("Repetindo " + p)
    p = p + 1;
}

//  11 - do while
let o = 10;
do{
    console.log(`Valor de o: ${o}`)
    o--
}while(o > 1);

// 12 - for
for( b = 1; b < 12; b++) {
    console.log(`Repetindo b: ${b}`);
}

// 13 - identação

let nome1= "João";
let nome2= "Maria";

for( b = 1; b < 3 ; b++) {
    if (b==1){
        console.log("Meu primeiro");
    }else if(b==2){
        if (nome1=="João") {
            console.log("Este é o meu segundo João");
        }else{
            console.log("Este é o meu segundo Maria");
        }
    }
} 

// 14 - break
for(let g=20;g>10;g--){
    console.log(`O valor de g é: ${g}`);

    if(g===12){
        console.log("Cheguei no 12");
        break;
    }
}

// 15 - continue
for(let s=0;s<10;s++){
    // operador resto=%
    if(s%2===0){
        console.log(`${s} é um número par`);
        continue;
    }
    console.log(s)
}

// 16 - switch
const job="Analista";
switch(job){
    case "Programado":
        console.log("Você é Programador")
        break
    case "Advogado":
        console.log("Você é Advogado")
        break
    case "Juiz":
        console.log("Você é Juiz")
        break
    case "Analista":
        console.log("Você é Analista")
        break
    default:
        console.log("Não achei sua profissão")
        break
}
