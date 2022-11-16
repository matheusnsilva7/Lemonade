import Home from "../components/Home";

export default function page({ onChange , language }: { onChange: boolean , language : string}) {
  return (
    <>
      <Home onchange={onChange} language={language} />
    </>
  );
}
