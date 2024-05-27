// 01 - arrays
const lista = [0,1,2,3,4,5,6,7,8,9];

console.log(lista);
console.log(typeof lista);

// 02 - mais sobre arrays
const arr = ["a","b","c","d","e","f","g","h","i","j"]

console.log(arr[0]);
console.log(arr[9]);
console.log(arr[33]);

// 03 - propriedades
const numeros = [0,1,2,3,4,5,6,7,8,9]
console.log(numeros.length);
const meuNome = ["Gerson Bernardo"];
console.log(meuNome.length);

// 04 - métodos
const outroNumero = [1,2,3];
const allnumbers=numeros.concat(outroNumero);
console.log(allnumbers);
const text = "algum texto";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);
console.log(text.indexOf("x"));

// 05 - objetos
const pessoa = {
    nome:"Gerson Bernardo",
    idade:53,
    profissao:"Analista de Sistemas"
}

console.log(pessoa);

console.log(pessoa.profissao);
console.log(pessoa.nome.length);
console.log(typeof pessoa);

// 06 - colocando e retirando propriedades
const car = {
    motor:2.0,
    marca:"VW",
    modelo:"Tiguan",
    km:20000,
};

console.log(car);
car.portas = 4;
console.log(car);
delete car.km;
console.log(car);

// 07 - mais sobre objetos
 const obj = {
    a:"teste",
    b: true,
 };

 console.log(obj instanceof Object);

 const obj2 = {
    c:[],
 };

 Object.assign(obj2,obj);
 console.log(obj2);

//  08 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 09 - mutação
const a= {
    nome: "Gerson",
};

const b=a;

console.log(a);
console.log(b);

a.idade=53;

console.log(a);
console.log(b);

delete b.idade;

console.log(a);
console.log(b);

// 10 - loop em array
const usuarios = ["Gerson","Helena","Abner","Jhonatas"];

for (let i = 0;i < usuarios.length; i++) {
    console.log(` Listando o usuário: ${usuarios[i]}`);
}

// 11 - push e pop
/* 
    push -> Coloca elementos no final do array
    push -> Retira elementos do final do array
*/
const array = ["a","b","c"];
console.log(array);

array.push("d");
console.log(array);
console.log(array.length);

array.pop();
console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);
array.push("K","L","M");

console.log(array);

// 12 - shift e unshift
/* 
    shift   -> Coloca elementos no início do array
    unshift -> Retira elementos do início do array
*/
const array2 = ["D","E","F"];
console.log(array2);

array2.shift("H");
console.log(array2);
console.log(array2.length);

array2.unshift();
console.log(array2);

const itemRemovido2 = array2.unshift();

console.log(itemRemovido2);
array2.shift("N","O","P");

console.log(array2);

// 13 - indexOf e lastindexOf
const frutas = ['abacate','maçã','morango','abacate'];

console.log(frutas.indexOf('maçã'));
console.log(frutas.indexOf('abacate'));

console.log(frutas[2]);
console.log(frutas[frutas.indexOf('morango')]);

console.log(frutas.lastIndexOf('abacate'));

console.log(frutas.lastIndexOf('goiaba'));
console.log(frutas.indexOf('goiaba'));

// 14 - slice
const testeSlice = ['a','b','c','d','e','f','g','h']

const subArray = testeSlice.slice(2,5);

console.log(subArray);
console.log(testeSlice);

const  subArray2 = testeSlice.slice(2,5+1);
console.log(subArray2);

const subArray3 = testeSlice.slice(25,50);
console.log(subArray3);

const subArray4 = testeSlice.slice(6);
console.log(subArray4);