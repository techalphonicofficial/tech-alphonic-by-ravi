import { notFound } from "next/navigation";

import BlogDetail from "@/components/Blog/BlogDetail";
import { blogDetails } from "@/config/blogData";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const post = blogDetails[slug];

  if (!post) {
    notFound();
  }

  const relatedPosts = blogData.posts
    .filter((item) => item.id !== post.id)
    .map((item) => ({
      ...item,
      slug: item.href?.split("/").pop() || "",
    }))
    .filter((item) => item.slug);

  return (
    <BlogDetail
      post={{
        ...post,
        slug,
      }}
      relatedPosts={relatedPosts}
    />
  );
}