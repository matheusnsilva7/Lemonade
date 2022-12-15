import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Data from "./Data";

import classes from "./Pickup.module.css";
import lemonade from "../img/lemonade.png";

interface props {
  onchange: boolean;
  language: string;
}

const Pickup = ({ onchange, language }: props) => {
  const [order, setOrder] = useState(false);
  const [firstLemonade, setFirstLemonade] = useState(0);
  const [secondLemonade, setSecondLemonade] = useState(0);
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
  }, [selectChange]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectChange) {
      setErr((prev) => {
        return { ...prev, location: true };
      });
      return;
    }
    if (firstLemonade + secondLemonade === 0) {
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
          <h4>{data.information.product}</h4>
          <h4>{data.information.quantity}</h4>
          <h4>{data.information.price}</h4>
        </div>
        <hr />
        <div className={classes.Product}>
          <h5>{data.products[0].name}</h5>
          <div className={`${classes.img} ${classes.backgroundGreen}`}>
            <img src={lemonade.src} className={classes.img} alt="lemonade" />
          </div>
          <input
            type="number"
            name="name"
            min="0"
            max="10"
            value={firstLemonade * 2}
            className={err.firstDrink ? classes.selectErr : ""}
            onChange={(e) => {
              setFirstLemonade(+e.target.value * 0.5);
              setErr((prev) => {
                return { ...prev, firstDrink: false, price: false };
              });
            }}
            onBlur={() =>
              firstLemonade > 5 &&
              setErr((prev) => {
                return { ...prev, firstDrink: true };
              })
            }
          />
          {err.firstDrink && (
            <h5 className={classes.textErr}>{data.products[0].err}</h5>
          )}
          <span>${data.products[0].price}</span>
        </div>
        <div className={classes.Product}>
          <h5>{data.products[1].name}</h5>
          <div className={`${classes.img} ${classes.backgroundBlue}`}>
            <img src={lemonade.src} className={classes.img} alt="lemonade" />
          </div>
          <input
            type="number"
            name="name"
            min="0"
            max="10"
            value={secondLemonade}
            className={err.secondDrink ? classes.selectErr : ""}
            onChange={(e) => {
              setSecondLemonade(+e.target.value);
              setErr((prev) => {
                return { ...prev, secondDrink: false, price: false };
              });
            }}
            onBlur={() =>
              secondLemonade > 10 &&
              setErr((prev) => {
                return { ...prev, secondDrink: true };
              })
            }
          />
          {err.secondDrink && (
            <h5 className={classes.textErr}>{data.products[1].err}</h5>
          )}
          <span>${data.products[1].price}</span>
        </div>
      </div>
      <div className={styleClasses("containerForm", "containerFormAnimation")}>
        <h4>{data.Order.summary}</h4>
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
            ${firstLemonade + secondLemonade}
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
