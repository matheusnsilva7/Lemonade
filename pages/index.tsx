import Home from "../components/Home";
import Head from "next/head";

interface props {
  onChange: boolean;
  language: string;
}

export default function page({ onChange, language }: props) {
  return (
    <>
      <Head>
        <title>Lemonade</title>
      </Head>
      <Home onchange={onChange} language={language} />
    </>
  );
}
