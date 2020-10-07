export interface NewsT {
    author: string,
    index: number,
    content: string,
    description: string,
    publishedAt: Date,
    source: {name: string},
    title: string,
    url: string,
    urlToImage: string
}

export interface PropsT {
    news: Array<NewsT>
}