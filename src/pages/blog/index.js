import RootLayout from "@/components/Layout/RootLayout";
import BlogCard from "@/components/Ui/Card";
import React from "react";

const BlogsPage = () => {
  return (
    <div className="text-black">
      <h1 className="text-black text-3xl font-semibold my-5">All Blogs</h1>
      <div className="grid grid-cols-3 gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogsPage;

BlogsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
