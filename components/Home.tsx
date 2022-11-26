import Link from "next/link";
import data from "./Data";
import { useRouter } from "next/router";

import classes from "./Home.module.css";
import { useState } from "react";

interface props {
  onchange: boolean;
  language: string;
}
interface dataInformation {
  title: string;
  subTitle: string;
  firstBtn: string;
  secondBtn: string;
}

const Home = ({ onchange, language }: props) => {
  const [changePage, setChangePage] = useState(false);
  const Data: dataInformation = data[language === "ENG" ? "ENG" : "POR"].home;
  const router = useRouter();

  const styleClasses = (style1: string, style2: string) => {
    return onchange || changePage ? classes[style1] + " " + classes[style2] : classes[style1];
  };

  return (
    <div className={styleClasses("container", "backgroundAnimation")}>
      <h1 className={onchange|| changePage ? classes.title : ""}>{Data.title}</h1>
      <p className={onchange || changePage ? classes.subtitle : ""}>{Data.subTitle}</p>
      <div>
        <Link
          className={styleClasses("btn", "buttonAnimation")}
          href="menu"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setChangePage(true);
            setTimeout(() => {
              router.push("menu");
            }, 400);
          }}
        >
          {Data.firstBtn}
        </Link>
        <Link
          className={styleClasses("btn", "buttonAnimation")}
          href="stores"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setChangePage(true);
            setTimeout(() => {
              router.push("stores");
            }, 400);
          }}
        >
          {Data.secondBtn}
        </Link>
      </div>
    </div>
  );
};

export default Home;
