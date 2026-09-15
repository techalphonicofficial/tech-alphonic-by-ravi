"use client";

import BlogArticleHero from "./BlogArticleHero";
import BlogArticleContent from "./BlogArticleContent";
import BlogAuthor from "./BlogAuthor";
import RelatedBlogs from "./RelatedBlogs";
import BlogCTA from "./BlogCTA";
import BlogShare from "./BlogShare";

export default function BlogDetail({ post, relatedPosts = [] }) {
  return (
    <main className="overflow-hidden bg-[#F8FAFC] text-[#1F2937]">

      <BlogArticleHero post={post} />

      <BlogArticleContent
        toc={post.toc}
        content={post.content}
      />

      <BlogShare
        title={post.title}
        url={`/blog/${post.slug || ""}`}
      />

      <BlogAuthor author={post.author} />

      <RelatedBlogs posts={relatedPosts} />

      <BlogCTA />

    </main>
  );
}