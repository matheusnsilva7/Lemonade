import dynamic from "next/dynamic";
import Head from "next/head";

interface props {
  onChange: boolean;
}

const MyAwesomeMap = dynamic(() => import("../components/Store"), {
  ssr: false,
});

const stores = ({ onChange }: props) => {
  return (
    <>
      <Head>
        <title>Lemonade - Store</title>
      </Head>
      <MyAwesomeMap onchange={onChange} />
    </>
  );
};

export default stores;
