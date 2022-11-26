import Pickup from "../components/Pickup";
import Head from "next/head";

interface props {
  onChange: boolean;
  language: string;
}

const pickup = ({ onChange, language }: props) => {
  return (
    <>
      <Head>
        <title>Lemonade - Order</title>
      </Head>
      <Pickup onchange={onChange} language={language} />
    </>
  );
};

export default pickup;
