import axios from 'axios';

//Base URL: https://sujeitoprogramador.com/
//Todos os filmes: r-api/?api=filmes/

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});

export default api;