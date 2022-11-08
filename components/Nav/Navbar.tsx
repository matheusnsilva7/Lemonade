import { useState } from "react";
import Data from "./Data";

import Classes from "./Nav.module.css";

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [language, setLanguage] = useState("ENG");
  const data: {
    ENG: { nav: { id: number; name: string; href: string }[] };
    POR: { nav: { id: number; name: string; href: string }[] };
  } = Data;

  return (
    <nav  className={Classes.nav}>
      <button className={Classes.button} onClick={() => setMobileNav(true)}>
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
          {data.ENG.nav.map(
            (link: { id: number; name: string; href: string }, i: number) => {
              return (
                <li key={link.id + i}>
                  <a href={link.href} onClick={() => setMobileNav(false)}>
                    {link.name}
                  </a>
                </li>
              );
            }
          )}
        </ul>
        <div>
          <button
            className={language === "ENG" ? Classes.checked : ""}
            onClick={() => {
              setLanguage("ENG");
              setMobileNav(false);
            }}
          >
            ENG
          </button>
          <button
            className={language === "POR" ? Classes.checked : ""}
            onClick={() => {
              setLanguage("POR");
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
