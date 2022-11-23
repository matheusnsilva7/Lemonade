import { useEffect, useRef, useState } from "react";
import classes from "./Pickup.module.css";

const Pickup = ({
  onchange,
  language,
}: {
  onchange: boolean;
  language: string;
}) => {
  const [firstLemonade, setFirstLemonade] = useState(0);
  const [secondLemonade, setSecondLemonade] = useState(0);
  const [selectChange, setSelectChange] = useState("");
  const [err, setErr] = useState({
    firstDrink: false,
    secondDrink: false,
    price: false,
    location: false,
  });

  useEffect(() => {
    setErr({
      firstDrink: false,
      secondDrink: false,
      price: false,
      location: false,
    });
  }, [selectChange, firstLemonade, secondLemonade]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    firstLemonade > 5 &&
      setErr((prev) => {
        return { ...prev, firstDrink: true };
      });
    secondLemonade > 10 &&
      setErr((prev) => {
        return { ...prev, secondDrink: true };
      });
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
  };

  return (
    <div className={classes.container}>
      <div
        className={
          onchange
            ? `${classes.containerInformationAnimation} ${classes.containerInformation}`
            : classes.containerInformation
        }
      >
        <div className={classes.information}>
          <h4>Products</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </div>
        <hr />
        <div className={classes.Product}>
          <h5>Limonada barata</h5>
          <div className={classes.img}></div>
          <input
            type="number"
            name="name"
            min="0"
            max="10"
            className={err.firstDrink ? classes.selectErr : ""}
            onChange={(e) => setFirstLemonade(+e.target.value * 0.5)}
          />
          {err.firstDrink && (
            <h5 className={classes.textErr}>Only 10 drinks</h5>
          )}
          <span>$0.50</span>
        </div>
        <div className={classes.Product}>
          <h5>Limonada barata</h5>
          <div className={classes.img}></div>
          <input
            type="number"
            name="name"
            min="0"
            max="10"
            className={err.secondDrink ? classes.selectErr : ""}
            onChange={(e) => setSecondLemonade(+e.target.value)}
          />
          {err.secondDrink && (
            <h5 className={classes.textErr}>Only 10 drinks</h5>
          )}
          <span>$1.00</span>
        </div>
      </div>
      <div
        className={
          onchange
            ? `${classes.containerFormAnimation} ${classes.containerForm}`
            : classes.containerForm
        }
      >
        <h4>Order summary</h4>
        <form onSubmit={onSubmit}>
          <label>which location?</label>
          <select
            onChange={(e) => setSelectChange(e.target.value)}
            className={err.location ? classes.selectErr : ""}
          >
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
          </select>
          <h5>Total Cost</h5>
          <span className={err.price ? classes.colorErr : ""}>
            ${firstLemonade + secondLemonade}
          </span>
          <button>ORDER</button>
        </form>
      </div>
    </div>
  );
};

export default Pickup;
