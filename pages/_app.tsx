import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Nav/Navbar";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [page, newpage] = useState<Boolean>(false);

  const changepage = (value: boolean) => {
    newpage(value);
  };

  return (
    <>
      <Navbar onChangePage={changepage} />
      <Component onchange={page} {...pageProps} />
    </>
  );
}
