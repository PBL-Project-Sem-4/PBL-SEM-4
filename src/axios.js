import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

const url = 'http://localhost:9000'

export default instance;
