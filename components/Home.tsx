import Link from "next/link";
import Image from "next/image";
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
  firstBtn: string;
}

const Home = ({ onchange, language }: props) => {
  const [changePage, setChangePage] = useState(false);
  const Data: dataInformation = data[language === "ENG" ? "ENG" : "POR"].home;
  const router = useRouter();

  const styleClasses = (style1: string, style2: string) => {
    return onchange || changePage
      ? classes[style1] + " " + classes[style2]
      : classes[style1];
  };

  return (
    <div className={styleClasses("container", "backgroundAnimation")}>
      <Image
        className={styleClasses("img", "imgOut")}
        src="/lemon.png"
        width={250}
        height={250}
        priority={true}
        alt="lemon"
      />
      <Image
        className={styleClasses("imgSecond", "imgSecondOut")}
        src="/lemon.png"
        width={250}
        height={250}
        priority={true}
        alt="lemon"
      />
      <h1 className={onchange || changePage ? classes.title : ""}>
        {Data.title}
      </h1>
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
      </div>
    </div>
  );
};

export default Home;
