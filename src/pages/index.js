import Image from "next/image";
import Head from "next/head";
import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/Ui/Banner";
import BlogCard from "@/components/Ui/Card";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Blog Practice</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Banner />
      <h1 className="text-black text-3xl font-semibold my-5">Latest Blogs</h1>
      <div className="grid grid-cols-3 gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
