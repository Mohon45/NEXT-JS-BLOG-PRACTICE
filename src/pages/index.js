import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/Ui/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <RootLayout />
    </>
  );
}
