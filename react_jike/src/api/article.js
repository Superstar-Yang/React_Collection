import {request} from "@/utils/index.js";

export const articleListApi = () => {
    return request({
        url: '/channels',
        method: 'GET',
    })
}

export const submitArticleApi = (data) => {
    return request({
        url: '/mp/articles?draft=false',
        method: 'POST',
        data
    })
}

export  const getArticleListApi = (params) => {
    return request({
        url: '/mp/articles',
        method: 'GET',
        params
    })
}

export  const delArticleListApi = (id) => {
    return request({
        url: `/mp/articles/${id}`,
        method: 'DELETE',
    })
}
export  const getArticleDetailApi = (id) => {
    return request({
        url: `/mp/articles/${id}`,
        method: 'GET',
    })
}

export  const updateArticleDetailApi = (data) => {
    return request({
        url: `/mp/articles/${data.id}?draft=false`,
        method: 'PUT',
        data
    })
}

