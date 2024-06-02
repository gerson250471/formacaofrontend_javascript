// 01 - strict
"use strict";

/*  
    força a ter que declarar variáveis,
        opa  = "Teste";

    não deixa que utilizemos palavras reservadas ou façamos atribuições e ela
        const undefined = 10;
    
        não deixa que apaguemos funções nas classes
        delete[].length
*/

// 02 - console.log
let a = 1;
let b = 2;

if (a == 1){
    a = b + 2;
}

console.log(a);

for(let i = 0; i < b ; i++) {
    a = a + 2;
    console.log(a);
}

if (a > 5) {
    a = 25;
}

console.log(a);

// 03 - debugger
let c = 1;
let d = 2;

if (c == 1){
    c = d + 2;
}

// debugger;

console.log(c);

for(let i = 0; i < d ; i++) {
    c = c + 2;
    console.log(c);
}

// debugger;

if (c > 5) {
    c = 25;
}

console.log(c);

// 04 - tratamento de dados
function verificarNumero(n){
    const result = Number(n);

    if(Number.isNaN(result)){
        console.log("Valor incorreto");
        return
    }

    console.log("Valor válido");
    return result;
}

verificarNumero(5);
verificarNumero("10");
verificarNumero({});
verificarNumero("Teste");

// 05 - exceptions
let x=10;

/*
if (x !=11){
    throw new Error("O valor de x não pode ser diferente de 11!");
}
*/

// 06 - try catch
try{
    const soma = x + y
} catch (error) {
    console.log(`Erro no programa: ${error}`)
}

// 07 - finally

try{
const value = verificarNumero("25")

if(!value) {
    throw new Error("Valores inválidos");
}
} catch (error) {
    console.log(`Opa aconteceu um problema: ${error}`);
} finally {
    console.log("O código foi executado!");
}

// 08 - assertion
function checkArray(arr){
    if (arr.length === 0) {
        throw new Error("O array precisa ter elementos");
    } else {
        console.log(`O array tem ${arr.length} elementos`);
    }
}

// checkArray([]);

checkArray([1,2,4,5])