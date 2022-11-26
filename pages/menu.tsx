import MenuPage from "../components/MenuPage";
import Head from "next/head";

interface props {
  onChange: boolean;
  language: string;
}

const Menu = ({ onChange, language }: props) => {
  return (
    <>
      <Head>
        <title>Lemonade - Menu</title>
      </Head>
      <MenuPage onchange={onChange} language={language} />
    </>
  );
};

export default Menu;
