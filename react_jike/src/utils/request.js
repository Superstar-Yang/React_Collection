import axios from 'axios'
import {getToken, removeToken} from "@/utils/index.js";
import router from "@/router/index.js";
const request = axios.create({
    baseURL:"http://geek.itheima.net/v1_0",
    timeout:5000,
})
request.interceptors.request.use(config => {
    const token = getToken()
    token && (config.headers.Authorization = `Bearer ${token}`)
    return config
},error => {
    return Promise.reject(error);
})
request.interceptors.response.use(response => {
    return response.data;
},error => {
    if(error.response.status === 401) {
        removeToken()
        router.navigate('/login')
        window.location.reload();
    }
    return Promise.reject(error);
})
export {request}

