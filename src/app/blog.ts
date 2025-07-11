// lib/blog.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src", "app", "Content", "Posts");

export function getAllPostsMeta() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}