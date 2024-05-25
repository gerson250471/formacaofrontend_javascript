// 01 - Criando uma função
function minhaFuncao(){
    console.log("Holá Mundo!");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function(){
    console.log("Função em variável");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt){
    console.log(`Meu nome é ${txt}`);
}

funcaoComParametro("João");
funcaoComParametro("Matheus");

// 02 - return
const a = 5;
const b = 10;
const c = 15;
const d = 25;

function soma(n1,n2){
    return n1+n2;
}

const resultado = soma(a,b);

console.log(resultado);
console.log(soma(c,d));

// 03 - escopo da função
let y=6;

console.log(`O valor fora da função é: ${y}`)

function testandoEscopo(){
    let y=12;
    console.log(`Dentro da função o valor é: ${y}`);
}

testandoEscopo();

y=18;

console.log(`Fora da função o valor é: ${y}`);

testandoEscopo();

// 04 - escopo aninhado
let=m=10;
function escopoAninhado(){
    let m=20;
    if (true){
        let m=30;
        if(true){
            let m=40;
            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}
escopoAninhado();
console.log(m);

// 05 - arrow function
const testeArrow = () =>{
    console.log("Esta é uma arrow function");
};

testeArrow();

const parOuImpar = (n) =>{
    if(n%2===0){
        console.log(`O número ${n} é par`)
        return
    }
    console.log(`O número ${n} é Impar`)
};

parOuImpar(5);
parOuImpar(6);

// 06 - mais sobre arrow function
const oQuadrado = (x) =>{
    return x * x ;
};

console.log("O quadrado de 4 é: " + oQuadrado(4));

const oQuadrado2 = (x) => x * x ;

console.log("O quadrado de 5 é: " + oQuadrado2(5));
console.log("O quadrado de 6 é: " + oQuadrado(6));

const oi =() => console.log("Olá mundo");

oi();

// 07 - parametro opcional
const multiplicar = function(a,b) {
    if(b===undefined){
        return a*2
    }else{
       return a * b;
    }
}

console.log(multiplicar(4));
console.log(multiplicar(3,8));

const saudar = (nome) =>{
    if(!nome){
        console.log("Oi");
        return;
    }
    console.log(`Oi ${nome}`);
}

saudar();
saudar("Maria");

// 08 - Valor default
const customGreeting = (name, greet = "Olá") =>{
    return `${greet}, ${name}!`;
};

console.log(customGreeting("Gerson"));
console.log(customGreeting("Abner","Bom dia"));

const repetirFrase = (frase,repet = 2) =>{
    for (let a=0;a<repet;a++) {
        console.log(`${a} ${frase}`)
    }
}

repetirFrase("Estou aprendendo");
repetirFrase("Vou vencer",5);

// 09 - closure
function someFunction(){
    let txt="Estou vendo algo";

    function display(){
        console.log(txt);
    }

    display();
}

someFunction();

// 10 - mais sobre closure
const multiplicationClosure = (n) => {
    return (m) =>{
        return n * m ;
    };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(6);

console.log(c1);
console.log(c2);
console.log(c1(4));
console.log(c2(8));

// 11 - Recursion
const untilTen = (n,m) => {
    if (n<10) {
        console.log("A função parou a execução");
    } else {
        const x =  n - m;
        console.log(x);
        untilTen(x,m);
    }
};
 
untilTen(112,7);

/* Tomar cuidado para não criar uma recursão infinita
    ----------------------------------------------
    EXEMPLO
    ----------------------------------------------
    function run(){
        console.log("Executando . . . ");
        run();
    };

    run();
*/

function factorial(x) {
    if (x === 0){
        return 1
    } else {
        return x * factorial( x - 1)
    }
}

const num = 6;
const result = factorial(num);

console.log(`O fatorial do número ${num} é : ${result}`);
