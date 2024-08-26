const postsFetch = axios.create({
    baseURL: "https://jsonplacehoder.typicode.com",
    headers: {
        Accept: "application/json",
        Authorization: "meunovotoken",
    },
});
