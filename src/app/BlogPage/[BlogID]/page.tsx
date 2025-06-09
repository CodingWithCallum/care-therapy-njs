export default async function BlogPosts({params,}: {params: Promise<{BlogID: string}>;}) {
    const BlogID = (await params).BlogID;
    return <div>
        <h1>Blog Post</h1>
        <p>Blog ID: {BlogID}</p>
        </div>;
}