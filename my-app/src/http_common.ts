import axios from "axios";

const http = axios.create({
    baseURL: "http://laravel.pd014.com",
    headers: {
        "Content-type": "application/json"
    }
});

export default http;