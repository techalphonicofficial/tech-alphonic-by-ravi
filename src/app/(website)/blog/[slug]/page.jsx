import { notFound } from "next/navigation";

import BlogDetail from "@/components/blog/BlogDetail";
import { blogData } from "@/config/blogData";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const post = blogData.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogData
    .filter((item) => item.id !== post.id)
    .slice(0, 3);

  return (
    <BlogDetail
      post={post}
      relatedPosts={relatedPosts}
    />
  );
}