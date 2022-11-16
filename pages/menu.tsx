import MenuPage from "../components/MenuPage";

const Menu = ({
  onChange,
  language,
}: {
  onChange: boolean;
  language: string;
}) => {
  return <MenuPage onchange={onChange} language={language} />;
};

export default Menu;
