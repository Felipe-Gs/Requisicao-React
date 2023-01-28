import axios from "axios";

const apigoogle = axios.create({
    baseURL: "https://api.github.com",
    headers:{
        "Content-Type": "application/json",
    }
});

export default apigoogle;