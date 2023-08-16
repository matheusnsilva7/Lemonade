import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Lemeonades from "./lemonades";
import Data from "./Data";

import classes from "./Pickup.module.css";

interface props {
  onchange: boolean;
  language: string;
}

const Pickup = ({ onchange, language }: props) => {
  const [order, setOrder] = useState(false);
  const [firstLemonade, setFirstLemonade] = useState(0);
  const [secondLemonade, setSecondLemonade] = useState(0);
  const [thirdLemonade, setThirdLemonade] = useState(0);
  const [selectChange, setSelectChange] = useState("");
  const data = Data[language === "ENG" ? "ENG" : "POR"].Pickup;
  const [err, setErr] = useState({
    firstDrink: false,
    secondDrink: false,
    price: false,
    location: false,
  });

  useEffect(() => {
    setErr((prev) => {
      return { ...prev, price: false, location: false };
    });
  }, [selectChange, firstLemonade, secondLemonade, thirdLemonade]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectChange) {
      setErr((prev) => {
        return { ...prev, location: true };
      });
      return;
    }
    if (firstLemonade + secondLemonade + thirdLemonade === 0) {
      setErr((prev) => {
        return { ...prev, price: true };
      });
      return;
    }
    if (err.firstDrink || err.secondDrink) return;
    setOrder(true);
  };

  const styleClasses = (style1: string, style2: string) => {
    return onchange ? classes[style1] + " " + classes[style2] : classes[style1];
  };

  return (
    <div className={classes.container}>
      <div
        className={styleClasses(
          "containerInformation",
          "containerInformationAnimation"
        )}
      >
        <div className={classes.information}>
          <h4>{data.information}</h4>
        </div>
        <hr className={classes.hr} />
        <Lemeonades
          data={data}
          firstLemonade={firstLemonade}
          err={err}
          setFirstLemonade={setFirstLemonade}
          setErr={setErr}
          secondLemonade={secondLemonade}
          setSecondLemonade={setSecondLemonade}
          setThirdLemonade={setThirdLemonade}
          thirdLemonade={thirdLemonade}
        />
      </div>
      <div className={styleClasses("containerForm", "containerFormAnimation")}>
        <h4>{data.Order.summary}</h4>
        <hr className={classes.hr} />
        <form onSubmit={onSubmit}>
          <label>{data.Order.location}</label>
          <select
            onChange={(e) => setSelectChange(e.target.value)}
            className={err.location ? classes.selectErr : ""}
          >
            <option value="">{data.Order.locations}</option>
            <option value="saopaulo">São Paulo</option>
            <option value="rio">Rio de Janeiro</option>
            <option value="santacatarina">Santa Catarina</option>
          </select>
          <h5>{data.Order.cost}</h5>
          <span className={err.price ? classes.colorErr : ""}>
            ${firstLemonade * 0.5 + secondLemonade * 1.5 + thirdLemonade * 2}
          </span>
          <button>{data.Order.btn}</button>
        </form>
      </div>
      {order && (
        <div onClick={() => setOrder(false)} className={classes.containerStore}>
          <LoadingIndicator />
          <h4>{data.text}</h4>
        </div>
      )}
    </div>
  );
};

export default Pickup;
