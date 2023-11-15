import { Inter } from "next/font/google";
import Head from "next/head";
import HomePage from "@/components/home";
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
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-MWFW39T3"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', "GTM-MWFW39T3", {
                page_path: window.location.pathname,
              });
              `,
          }}
        />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MWFW39T3"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <HomePage />
    </>
  );
}
