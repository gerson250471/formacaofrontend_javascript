// 01 - Movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes);

console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// 02 - Selecionando por tag
const listItens = document.getElementsByTagName("li");
console.log(listItens);

// 03 - selecionando por id
const item = document.getElementById("title");
console.log(item);

// 04 - selecionando por classe
const classeElement = document.getElementsByClassName("product");
console.log(classeElement);

// 05 - selecionando por css
const listaProdutos = document.querySelectorAll(".product");
console.log(listaProdutos);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// 06 - Alterando o HTML
/* 
    Nas alterações temos os seguintes modos:
    - insertBefore  : insere um elemento antes do outro
    - appendChild   : insere um elemento dentro do outro
    - replaceChild  : trocar um elemento pelo outro
*/ 
//  insertBefore
/* Criando o Elemento */
const p = document.createElement("p");
p.textContent = "Gerson Bernardo"

/* referenciando o elemento próximo de onde quero inserir o elemento  */ 
const header = title.parentElement;

header.insertBefore(p,title);

// appendChild
/* Referenciando onde quero inserir o elemento */
const navLinks = document.querySelector("nav ul");

/* criando o elemento no local escolhido */
const li = document.createElement("li");
li.textContent = "Novo Página Criada"

/* colocando onde escolhi colocar */
navLinks.appendChild(li);

// replaceChild
/* Para este caso precisamos 
    1° Referenciar onde queremos realizar a inserção
    2° Referenciar o objeto alvo da troca
*/

const h2 = document.createElement("h2");
h2.textContent = "Título Alterado"

header.replaceChild(h2,title);

// 07 - createTextNode
const myText = document.createTextNode("Agora vou Colocar outro Título para Continuar");
const h3 = document.createElement("h3");
h3.appendChild(myText);
mainContainer.appendChild(h3);

// 08 - Trabalhando com atributos
const primeiroLink = navLinks.querySelector("a");
/* trocando o link */
primeiroLink.setAttribute("href","https://www.google.com");
/* Colocando para abrir em outra aba */
primeiroLink.setAttribute("target","_blank");

// 09 - altura e largura
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 10 - posição do elemento
const product1 = classeElement[0];

console.log(product1.getBoundingClientRect());

// 13 - css com js
mainContainer.style.color = "blue";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

// 14 - alterando estilos de varios elementos
for(const li of listItens){
    li.style.backgroundColor = "chocolate";
}