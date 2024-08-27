import {request} from "@/utils/index.js";

export const loginApi = (data) => {
    return request({
        url: '/authorizations',
        method: 'POST',
        data
    })
}

export const getProfileApi = () => {
    return request({
        url: '/user/profile',
        method: 'GET',
    })
}
