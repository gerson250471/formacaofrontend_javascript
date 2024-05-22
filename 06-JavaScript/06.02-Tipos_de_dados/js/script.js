// 01 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 02 - Operações aritméticas
console.log(2+4); 
console.log(10-5); 
console.log(2*4); 
console.log(2/4); 
console.log((5+2)*3);

// 03 - special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log(2* "abc")

// 04 - Strings
console.log("Um Texto");
console.log('Um Texto');
console.log(`Um Texto`);

console.log(typeof "Um Texto");
console.log(typeof 'Um Texto');
console.log(typeof `Um Texto`);

// 05 - Simbolos especiais em string
console.log("Gerson Bernardo da silva\n R: José Vicente de Barros 1762")
console.log('Espaçamento de \t tab')

// 06 - Concatenação
console.log("Meu"+' Nome é:'+` Gerson Bernardo`);

// 07 - Template string
console.log(`A soma de 2+2 é: ${2+2}`)

console.log(`Podemos executar qualquer coisa aqui ${console.log("Ola mundo ")}`)

// 08 - Boolean
console.log(true);
console.log(false);
console.log(2 ===2 );
console.log(5 < 3);
console.log(typeof false);
console.log(typeof true);

// 09 - Comparações
console.log(5 >= 5);
console.log(5 > 7);
console.log(10 == 10);
console.log(10 != 8);

// 10 - Idêntico
console.log(9=="9");
console.log(9 + "9");
console.log(9==="9");
console.log(9 != "9");
console.log(9 !== "9");

// 11 - Operadores Lógicos
console.log(true && true);
console.log(true && false);
console.log(5>2 && 2<10);
console.log(5>3 && "Matheus" === 1);
console.log(5>3 || "Matheus" === 1);
console.log(5<3 || 10>11);
console.log(!true);
console.log(!5>4);

// 12 - empty values
console.log(typeof null, typeof undefined);
console.log(null==undefined);
console.log(null=== undefined);
console.log(null == false);
console.log(undefined ==false);

// 13 - mudança de tipos
console.log(5 * null);
console.log("10"+1);
console.log("10"-1);
console.log("teste" * "opa");