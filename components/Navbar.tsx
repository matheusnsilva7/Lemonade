import { useState } from "react";
import Data from "./Data";
import { useRouter } from "next/router";

import Classes from "./Nav.module.css";
import Link from "next/link";

interface NavConfig {
  onChangePage: (value: boolean) => void;
  onChangeLaguage: (value: string) => void;
  language: string | undefined;
}
interface data {
  nav: {
    id: number;
    name: string;
    href: string;
  }[];
}

const NavBar = ({ onChangePage, onChangeLaguage, language }: NavConfig) => {
  const [mobileNav, setMobileNav] = useState(false);
  const router = useRouter();
  const data: data = Data[language === "ENG" ? "ENG" : "POR"];

  return (
    <nav className={Classes.nav}>
      <button
        aria-label="Btn"
        className={Classes.button}
        onClick={() => setMobileNav(true)}
      >
        <div className={Classes.icon}></div>
      </button>
      {mobileNav && (
        <div
          className={Classes.background}
          onClick={() => setMobileNav(false)}
        ></div>
      )}
      <div
        className={
          mobileNav ? `${Classes.links} ${Classes.show}` : Classes.links
        }
      >
        <div onClick={() => setMobileNav(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
          </svg>
        </div>
        <ul>
          {data.nav.map(
            (link: { id: number; name: string; href: string }, i: number) => {
              const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                onChangePage(true);
                setMobileNav(false);
                link.href.replace("/", "") !== router.asPath.replace("/", "")
                  ? setTimeout(() => {
                      onChangePage(false);
                      router.push(link.href);
                    }, 400)
                  : onChangePage(false);
              };
              return (
                <li key={link.id + i}>
                  <Link
                    className={
                      link.href === router.asPath.replace("/", "")
                        ? Classes.checked
                        : ""
                    }
                    href={link.href}
                    onClick={handleClick}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
        <div>
          <button
            className={language === "ENG" ? Classes.checked : ""}
            onClick={() => {
              onChangeLaguage("ENG");
              setMobileNav(false);
            }}
          >
            ENG
          </button>
          <button
            className={language !== "ENG" ? Classes.checked : ""}
            onClick={() => {
              onChangeLaguage("POR");
              setMobileNav(false);
            }}
          >
            POR
          </button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
