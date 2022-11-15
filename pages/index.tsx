import Home from "../components/Home/Home";

export default function page({ onchange }: { onchange: boolean }) {
  return (
    <>
      <Home onchange={onchange} />
    </>
  );
}
