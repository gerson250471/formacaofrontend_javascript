// 01 - var, let e const
var a = 10;
var b = 15;

if(b>10){
    var a = 5;
    console.log(a);
}
console.log(a);

/* no caso acima perdeu-se a referência inicial */

let c = 10;
let d = 15;

if(d>10){
    let c = 5
    console.log(c);
}
console.log(c);

function logName(){
    const name = "Pedro";
    console.log(name);
}

const name = "Matheus";

logName();
console.log(name);

// 02 - arrow function
const sum = function(a,b){
    return a + b;
}

const arrowSum = (a,b) =>  a + b ;

console.log(sum(5,6));
console.log(arrowSum(5,6));

const greeting = (name) => {
    if(name){
        return `Oi ${name}`
    }else{
        return "oi"
    }
}

console.log(greeting());
console.log(greeting("Geson"));

const user ={
    name:"Gerson",
    sayUserName() {
        setTimeout(function () {
            console.log(this);
            console.log(`Username: ${this.name}`);
        },1000);
    },
    syUserNameArrow() {
        setTimeout(() =>{
            console.log(this);
            console.log(`Username: ${this.name}`);
        },2000);
    },
};

user.sayUserName();
user.syUserNameArrow();

// 03 - filter
const arr = [1,2,3,4,5,6,7,8,9,22]

const highNumber = arr.filter((n) =>{
    if(n > 5){
        return n;
    }
})

const listaMenor = arr.filter((x) =>{
    if(x < 8){
        return x;
    }
})

console.log(highNumber);
console.log(listaMenor);

const usuarios =[
    {nome:"Gerson Bernardo", situacao:true},
    {nome:"Marcos Roberto da Silva", situacao:false},
    {nome:"Debora Cristina da Silva Torres", situacao:true},
    {nome:"José Bernardo da Silva", situacao:false},
    {nome:"Raquel Carlos da Silva", situacao:true},
    {nome:"Roger Figueiredo Torres", situacao:true},
];

const usuariosVivos = usuarios.filter((usuario) =>usuario.situacao);

console.log(usuariosVivos);

// 04 - map
const products =[
    {name:"Camisa", price:10.99, category:"Roupas"},
    {name:"Chaleira Elétrica", price:150.21, category:"Eletro"},
    {name:"Fogão", price:499.33, category:"Eletro"},
    {name:"Calça Jeans", price:87.99, category:"Roupas"},
    {name:"Casaco", price:120.99, category:"Roupas"},
];

products.map((product) => {
    if(product.category === "Roupas") {
        product.onSale = true;
    }
});

console.log(products);

// 05 - template literals
const userName = "Gerson Bernardo";
const age = 53;
console.log(`O nome do usuário é ${userName} e ele tem ${age} anos`);

// 06 - desctructuring
const fruits = ["Maçã","Mamão","Laranja"];

const [f1,f2,f3] = fruits;
console.log(f1,f3);

const productDetails = {
    name:"Mouse", price:"39.99", category:"Periférico", color:"Cinza"
}

const {name:produtctName, price, category, color} = productDetails;

console.log(`O nome do produto é ${produtctName}, e ele custa R$${price} e é da cor ${color}`);

// 07 - spread operator
const a1 = [1,2.3,4];
const a2 = [9,10,13,15];

const a3 = [...a1,...a2];
console.log(a3);

const a4 = [0,...a3,33];
console.log(a4);

const carName = {name:"Gol"};
const carBrand = {brand:"VW"};
const otherInfos = {km:100000, price:49999};
const car = {...carName,...carBrand,...otherInfos};

console.log(car);

// 08 - classes
class Product{
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100-discount)/100);
    }
}

const shirt = new Product("Camisa gola V",20);
console.log(shirt);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(18));

// 09 - herança
class ProdctWithAttributes extends Product {
    constructor(name,price,colors) {
        super(name,price);
        this.colors = colors;
    }

    showColors() {
        console.log("As cores são:");
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProdctWithAttributes("chapéu", 28.79, ["Preto","Amarelo","Verde","Rosa"])

console.log(hat);
console.log(hat.name);
hat.showColors();