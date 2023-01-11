import axios from "axios";

const blogFecht = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers:{
        "Content-Type": "application/json",
    }
});

export default blogFecht;