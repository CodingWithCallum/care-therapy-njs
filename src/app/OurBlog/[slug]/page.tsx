// /app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const files = fs.readdirSync("content/blog");
  return files.map((file) => ({ slug: file.replace(".mdx", "") }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const filePath = path.join(process.cwd(), "content", "blog", `${(await params).slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return (
    <article className="max-w-3xl mx-auto px-5 py-16 prose prose-lg">
      <h1 className="text-gray-900">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-6">By {data.author} on {data.date}</p>
      <MDXRemote source={content} />
    </article>
  );
}
