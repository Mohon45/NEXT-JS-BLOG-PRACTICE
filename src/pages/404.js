import { Button } from "antd";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ErrorImg from "@/assets/images/404_Error_Page.png";

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <Head>
        <title>PH-News-404 Not Found</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={ErrorImg}
        width={700}
        alt="error_image"
        style={{ display: "flex", margin: "50px auto" }}
      />
      <Link className="w-[200px] mx-auto" href="/">
        <Button>Back To Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
