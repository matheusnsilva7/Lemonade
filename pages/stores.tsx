import Store from "../components/Store";
import dynamic from "next/dynamic";

const MyAwesomeMap = dynamic(() => import("../components/Store"), {
  ssr: false,
});

const stores = ({
  onChange,
  language,
}: {
  onChange: boolean;
  language: string;
}) => {
  return <MyAwesomeMap onchange={onChange} language={language} />;
};

export default stores;
