import Link from "next/link"
import {ArrowLeftIcon} from "@heroicons/react/24/solid"
import { getArticleData } from "@/app/BlogLib/articles"

const Article = async ({ params }: {params: {slug:string}}) => {
    const articleData = await getArticleData(params.slug)

    return (
        <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
            <div className="flex justify-between">
                <Link href="/BlogPage" className="flex flex-row gap-1 place-items-center">
                <button className="btn"><ArrowLeftIcon width={20}/>Back To Home</button>
                </Link>
                <p>{articleData.date.toString()}</p>
            </div>
            <article className="article" dangerouslySetInnerHTML={{__html: articleData.contentHtml}}/>
        </section>
    )
}

export default Article