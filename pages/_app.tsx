import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [page, newPage] = useState(false);
  const [language, setLanguage] = useState<string>("ENG");

  const changePage = (value: boolean) => {
    newPage(value);
  };

  const changeLanguage = (value: string) => {
    setLanguage(value);
  };

  return (
    <>
      <Navbar onChangePage={changePage} onChangeLaguage={changeLanguage} language={language}/>
      <Component onChange={page} language={language} {...pageProps} />
    </>
  );
}
