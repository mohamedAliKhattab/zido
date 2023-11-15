import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import TeachersPage from "@/components/teachers";
import { GLOBAL } from "@/constants/i18n/ar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>{GLOBAL.WEBSITE_INFO.TITLE}</title>
        <meta name="description" content={GLOBAL.WEBSITE_INFO.DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TeachersPage />
    </>
  );
}
