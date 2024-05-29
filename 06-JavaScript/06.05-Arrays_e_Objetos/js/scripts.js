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

// 15 - foreach
const nums = [1,2,3,4,5,6,7,8,9]

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const post = [
    {titulo:"Primeiro post",categoria:"PHP"},
    {titulo:"Segundo post",categoria:"Javascript"},
    {titulo:"Terceiro post",categoria:"Python"},
]

post.forEach((post) =>{
    console.log(`Exibindo post: ${post.titulo}, da categoria: ${post.categoria}`);
});

// 16 - includs
const marcas = ["BMw","VW","Ford","Fiat","Chevrolet"]

console.log(marcas.includes("Ford"));
console.log(marcas.includes("KIA"));

// 17 - reverse 
const rTest = [1,2,4,5,6,7];

rTest.reverse();
console.log(rTest);

// 18 - trim
const tTrim = "    Gerson Bernardo da Silva \n   ";

console.log(tTrim);
console.log(tTrim.trim());
console.log(tTrim.length);
console.log(tTrim.trim().length);

// 19 - padStart e padEnd
/* 
na versão que estou utilizando não existe mais esta função
const tpad = 1;

 const novoNumero=tpad.padStart(4,"0");
 console.log(tpad);
 console.log(novoNumero);

 const tend = novoNumero.padEnd(6,"0");
 console.log(tend);
 */

//  20 - split
const frase="O rato roeu a roupa do rei de Roma"
const arrayDaFrase = frase.split(" ");
console.log(frase);
console.log(arrayDaFrase);

// 21 - join
const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const itens = ["mouse","Teclado","Monitor"];
const fraseDeCompra = console.log(`Precisamos comprar: ${itens.join(", ")}`);
console.log(fraseDeCompra);

// 22 - repet
const graf="l"

console.log(graf.repeat(8));

// 23 - rest operator
const somaInfinita = (...args) => {
    let total = 0;

    for(let i = 0;i< args.length;i++){
        total+= args[i];
    }
    return total;
};

console.log(somaInfinita(1,2,3));
console.log(somaInfinita(10,20,45,78,15478,54328,123,457,849));

// 24 - for of
const somaInfinita2 = (...args) => {
    let total = 0;
    for (num of args){
        total += num;
    }
    return total
}

console.log(somaInfinita2(1,2,3,10));
console.log(somaInfinita2(10,20,45,78,15478,54328,123,457,849,100));

// 25 - destructuring em objetos
const detalheUsuario = {
    nome:"Gerson Bernardo",
    sobrenome:"Silva",
    profissao:"Analista",
};

const {nome,sobrenome,profissao} = detalheUsuario;
console.log(nome,sobrenome,profissao);

/* 
    Pode ser necessário renomear a varial
*/

const{nome:primeiroNome} = detalheUsuario;
console.log(primeiroNome);

// 26 - destructuring com  arrays
const mLista = ["Avião","Submarino","Carro"]

const [veiculoA,veiculoB,veiculoC] = mLista;

console.log(veiculoA,veiculoB,veiculoC);

// 27 - JSON
const mJSON = '{"nome":"Gerson Bernardo", "idade":53 , "Habilidades":["PHP","Javascript","Python"]}';

console.log(mJSON);
console.log(typeof mJSON);

// 28 - JSON para objeto e objeto para JSON
const meuObjeto = JSON.parse(mJSON);
console.log(meuObjeto);
console.log(meuObjeto.nome);
console.log(typeof meuObjeto);

meuObjeto.isOpenToWork = true;
console.log(meuObjeto);

const nMeuObjeto = JSON.stringify(meuNome);
console.log(nMeuObjeto);
console.log(typeof nMeuObjeto);
