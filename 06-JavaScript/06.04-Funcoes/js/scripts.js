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