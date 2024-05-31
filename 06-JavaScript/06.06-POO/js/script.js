// 01 - métodos
const animal ={
    nome:"Bob",
    latir: function(){
        console.log("au au");
    },
};

console.log(animal.nome);
animal.latir();

// 02 - aprofundando em métodos
const pessoa = {
    nome:"Gerson",

    getNome:function () {
        return this.nome;
    },

    setNome:function(novoNome){
        this.nome = novoNome;
    },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("José Bernardo");
console.log(pessoa.nome);
console.log(pessoa.getNome());

// 03 - prototype
const text = "Bom dia";

console.log(Object.getPrototypeOf(text));

const bool=true;
console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);
console.log(Object.getPrototypeOf(arr));

// 04 - mais sobre prototype
const meuObj = {
    a:"b"
}

console.log(Object.getPrototypeOf(meuObj));
console.log(Object.getPrototypeOf(meuObj) === Object.prototype);

const meuObj2 = Object.create(meuObj);

console.log(meuObj2);

console.log(meuObj2.a);

console.log(Object.getPrototypeOf(meuObj2) === meuObj);

// 05 - classes básicas
const cachoro = {
    raca:null,
    patas:4,
};

/* Criando o primeiro objeto */
const pastorAlemao = Object.create(cachoro);
pastorAlemao.raca = "Pastor Alemão";
/* exibindo no console minha classe */
console.log(pastorAlemao);
console.log(pastorAlemao.patas);

/* Criando o segundo objeto */
const buldog = Object.create(cachoro);
buldog.raca="Buldog";
/* exibindo o objeto */
console.log(buldog);

// 06 - unções como classe - função construtora
function criarCachoro(nome,raca){
    
    const cachorro = Object.create({});

    cachorro.nome=nome;
    cachorro.raca=raca;

    return cachorro;
}

const bob = criarCachoro("Bob","Vira lata");
console.log(bob);

const jack = criarCachoro("Jack","Poodle");
console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 07 - funções como objeto :continuação da função construtora
function Cachorro(nome,raca){
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("ozzy","husky")
console.log(husky);

// 08 - Métodos na função construtora
Cachorro.prototype.uivar = function (){
    console.log("Auuuuuuu!");
};

console.log(Cachorro.prototype);
husky.uivar();

// 09 - classes ES6
class ClasseCachorro {
    constructor(nome,raca) {
        this.nome = nome;
        this.raca=raca;
    }
}

const jeff = new ClasseCachorro("jeff","labrador");
console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// 10 - mais sobre classes
class Caminhao{
    constructor(eixos,cor){
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao(){
        console.log(`Este caminhão tem ${eixos} eixos e é da cor ${cor}`);
    }
}

const scania = new Caminhao(6,"Vermelho");
console.log(scania);

scania.descreverCaminhao();

Caminhao.motor = 4

const c2 = new Caminhao(4,"Preto");
console.log(c2);
console.log(c2.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6,"Azul");
console.log(c3.motor);