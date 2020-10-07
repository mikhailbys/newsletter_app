import React, {FC, useEffect, useState} from 'react'
import {LinearProgress} from "@material-ui/core";
import useStyles from "./styles";
import {News} from "./News";
import {NewsT} from "./types";

export const NewsContainer: FC = () => {
    const [news, setNews] = useState<Array<NewsT>>([]);
    const styles = useStyles();
    useEffect(() => {
        fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=cdb43389cb6c4f779584ec7231897a7a')
            .then(res => res.json()).then(news => setNews(news.articles));
    }, []);
    // negative case
    if (news.length === 0) {
        return <LinearProgress className={styles.linearProgress}/>
    }
    return <News news={news} />;
}