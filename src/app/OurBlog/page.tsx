// /app/blog/page.tsx
import { getAllPostsMeta } from "../blog";
import Link from "next/link";

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <section className="max-w-7xl mx-auto px-5 mt-15 py-20 space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">CARE Blog</h1>
      <p className="text-gray-600">Insights, education, and stories from the world of adaptive movement therapy.</p>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{post.description}</p>
            <span className="text-sm text-sky-700 font-medium">{post.date}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
