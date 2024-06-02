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
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao ( 6 , "Vermelho" );
console.log(scania);

scania.descreverCaminhao();

Caminhao.motor = 4

const c2 = new Caminhao(4,"Preto");
console.log(c2);
console.log(c2.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6,"Azul");
console.log(c3.motor);

// 11 - override
class Humano {
    constructor(nome,idade) {
        this.nome
        this.idade
    }
}

const matheus = new Humano("Matheus",31)
console.log(matheus);
Humano.prototype.idade = "Não definida";
console.log(matheus.idade);
console.log(Humano.prototype.idade);

// 12 - symbol
class Aviao{
    constructor(marca,turbina) {
        this.marca = marca;
        this.turbina = turbina;
    }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing",10);
console.log(boeing);

console.log(boeing[asas]);
console.log(boeing[pilotos]);

// 13 - getter e setter
class Post {
    constructor(titulo,descricao,tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum ost","É um post sobre programação");
console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript, js";
console.log(myPost);

// 14 - Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas,nome){
        super(patas,patas)
        this.nome = nome
    }
}

const shark = new Lobo(4,"Shark");
console.log(shark);

// 15 - instanceof
console.log(shark instanceof Lobo);
console.log(Lobo instanceof Mamifero);
console.log(new Lobo(4,"Teste") instanceof Mamifero);
console.log(new Post("a","b") instanceof Lobo);