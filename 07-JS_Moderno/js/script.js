// 01 var. let e const
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

// 03 filter
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