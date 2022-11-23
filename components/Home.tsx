import Link from "next/link";
import Head from "next/head";
import data from "./Data";

import classes from "./Home.module.css";

const Home = ({
  onchange,
  language,
}: {
  onchange: boolean;
  language: string;
}) => {
  const Data: {
    title: string;
    subTitle: string;
    firstBtn: string;
    secondBtn: string;
  } = data[language === "ENG" ? "ENG" : "POR"].home;
  return (
    <div className={classes.container}>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={onchange ? classes.title : ""}>{Data.title}</h1>
      <p className={onchange ? classes.subtitle : ""}>{Data.subTitle}</p>
      <div>
        <Link
          className={
            onchange ? classes.buttonAnimation + " " + classes.btn : classes.btn
          }
          href="menu"
        >
          {Data.firstBtn}
        </Link>
        <Link
          className={
            onchange ? classes.buttonAnimation + " " + classes.btn : classes.btn
          }
          href="#"
        >
          {Data.secondBtn}
        </Link>
      </div>
    </div>
  );
};

export default Home;
