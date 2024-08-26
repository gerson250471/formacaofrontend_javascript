// 01 - Instalação Axios
console.log(axios);

// 02 - primeiro request
const getData = async() =>{
    try {
        const  response = await postsFetch.get("/users",
            // 04 - definindo headers
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

getData();

// 03 - imprimindo na tela
const container = document.querySelector("#user-container");

const printData = async () => {
    const data = await getData();
    data.forEach((user) => {
        // criar o elemento
        const div = document.createElement("div");
        // Criando o nome do elemento
        const nameElement = document.createElement("h2");
        nameElement.textContent = user.name;

        // Colocando o nome dentro da div criada
        div.appendChild(nameElement);

        // Colocar email do usuário
        const emailElement = document.createElement("p");
        emailElement.textContent = user.email;
        div.appendChild(emailElement);

        container.appendChild(div)

    });
};

printData();

// 04 - post
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    postsFetch.post("/posts" ,{
        title: titleInput.value, body: bodyInput.value, userId:1
    })
});