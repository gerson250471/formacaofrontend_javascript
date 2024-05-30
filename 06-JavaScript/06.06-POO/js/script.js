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