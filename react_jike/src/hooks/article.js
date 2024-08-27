import {useEffect, useState} from "react";
import {articleListApi} from "@/api/article.js";

export const useArticle = ()=>{
    const [channelList, setChannelList] = useState([])
    useEffect(() => {
        articleListApi().then(res => {
            setChannelList(res.data.channels)
        })
    }, []);
    return {channelList}
}