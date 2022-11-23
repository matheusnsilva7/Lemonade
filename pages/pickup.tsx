import Pickup from "../components/Pickup";

const pickup = ({
  onChange,
  language,
}: {
  onChange: boolean;
  language: string;
}) => {
  return <Pickup onchange={onChange} language={language} />;
};

export default pickup;
