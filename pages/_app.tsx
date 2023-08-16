import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [page, newPage] = useState(false);
  const [language, setLanguage] = useState<string>("ENG");

  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    </Head>
      <Navbar
        onChangePage={newPage}
        onChangeLaguage={setLanguage}
        language={language}
      />
      <Component onChange={page} language={language} {...pageProps} />
    </>
  );
}
