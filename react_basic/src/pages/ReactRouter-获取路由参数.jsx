import React from 'react';
import {useParams, useSearchParams} from "react-router-dom";

const Article = () => {
    // const [params] = useSearchParams();
    const query = useParams()
    // console.log(params);
    // // const id = params.get('id')
    // // const name = params.get('name')
    const id1 = query.id
    const name1 = query.name
    console.log(useParams())
    return (
        <div>
            我是文章页面 -- {id1} --- {name1}
        </div>
    );
};

export default Article;