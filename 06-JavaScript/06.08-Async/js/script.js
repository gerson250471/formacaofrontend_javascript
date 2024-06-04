// 01 - setTimeout
console.log("Ainda não executou");

setTimeout(function (){
    console.log("Requisição assincrona realizada")
},2000);

console.log("Ainda não executou dois");

// 02 - setInterval
console.log("Ainda não começou");

// setInterval(function(){
//     console.log("Intervalo Assincrono");
// },3000);

console.log("Ainda não começou 2");

// 03 - Promise
const promessa = Promise.resolve(5+5);

console.log("Algum código");

promessa
    .then((value) =>{
        console.log(`A soma é: ${value}`);
        return value;
    })
    .then((value) => value - 1)
    .then((value) => console.log(`Agora o valor é ${value}`));

console.log("Outro código")

// 04 - falha na promise
Promise.resolve(4 * "asd")
    .then((n) => {
        if(Number.isNaN(n)) {
            throw new Error("Valor inválido");
        }
    })
    .catch((err) => console.log(`Ocorreu um erro ${err}`));

// 05 - rejeição
function verificarNumero(n) {
    return new Promise((resolve,reject) =>{
        if (n > 10) {
            resolve (`O número é maior que 10`);
        } else {
            reject(new Error("O número é muito baixo"));
        }
    });
}

const a = verificarNumero(20);

const b = verificarNumero(10);

a.then((v) => console.log (`O resultado é ${v}`)).catch((err) =>
    console.log(`Um erro ocorreu: ${err}`)
);

b.then((v) => console.log (`O resultado é ${v}`)).catch((err) =>
    console.log(`Um erro ocorreu: ${err}`)
);

// 06 - resolvendo várias promises
const p1 = new Promise((resolve,reject) => {
    setTimeout(function (){
        resolve(10);
    },3000);
});

const p2 = Promise.resolve( 10 + 10 );

const p3 = new Promise((resolve,reject) => {
    if ( 30 > 10 ) {
        resolve(30);
    } else {
        reject("Erro!");
    }
});

Promise.all([p1,p2,p3]).then ((values) => console.log(values));

// 07 - async functions
async function somarComEspera(a,b) {
    return a + b 
}

somarComEspera(2,4).then((value) => {
    console.log(`${a} + ${b} = ${value}`);
});

// 08 - async await
function resolveComEspera() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolveu a Promise`);
        },2000);
    });
}

async function chamadaAsync() {
    console.log("Chamando a Promise, e esperando o resultado")
    const result = await resolveComEspera()
    console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();

// 09 - generator
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);