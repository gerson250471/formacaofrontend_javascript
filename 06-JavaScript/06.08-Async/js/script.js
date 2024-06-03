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