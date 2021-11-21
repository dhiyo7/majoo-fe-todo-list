import axios from "axios";

const req = axios.create({
    baseURL : 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/'
})

export default req;