import Image from "next/image"
import Link from "next/link"
import { getCategorisedArticles } from "../BlogLib/articles"
import ArticleItemList from "../Components/ArticleListItem"

const Blog = () => {
    const articles = getCategorisedArticles()
return (
    <main>
    <section className="pt-25 mx-auto w-11/12 md:-1/2 mt-20 flex flex-col gap-16 mb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
            <h1 className="text-3xl font-semibold text-blue-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">From our latest Blog Post</h1>
        </div>
        <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
            {articles != null && Object.keys(articles).map((article) => <ArticleItemList category={article} articles={articles[article]} key={article}/>)}
        </section>
    </section>
    </main>
)
}
export default Blog