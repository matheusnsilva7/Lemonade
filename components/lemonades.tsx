import classes from "./Pickup.module.css";

interface props {
  data: any;
  err: any;
  firstLemonade: number;
  secondLemonade: number;
  thirdLemonade: number;
  setFirstLemonade: (value: any) => void;
  setSecondLemonade: (value: any) => void;
  setErr: (value: any) => void;
  setThirdLemonade: (value: any) => void;
}

const Lemeonades = ({
  data,
  firstLemonade,
  err,
  setFirstLemonade,
  setErr,
  secondLemonade,
  setSecondLemonade,
  setThirdLemonade,
  thirdLemonade,
}: props) => {
  return (
    <>
      <div className={classes.Product}>
        <h5>{data.products[0].name}</h5>
        <div className={`${classes.img} ${classes.backgroundYellow}`}>
          <img src="/lemonade2.png" className={classes.img} alt="lemonade" />
        </div>
        <div>
          <span
            className={`material-symbols-outlined ${classes.btnNumber}`}
            onClick={() => {
              setFirstLemonade((e: number) => (e <= 0 ? e : (e -= 1)));
            }}
          >
            arrow_back_ios
          </span>
          <span>{firstLemonade}</span>
          <span
            className={`material-symbols-outlined ${classes.btnNumber}`}
            onClick={() => {
              setFirstLemonade((e: number) => (e >= 10 ? e : (e += 1)));
            }}
          >
            arrow_forward_ios
          </span>
        </div>
        <span>${data.products[0].price}</span>
      </div>
      <div className={classes.Product}>
        <h5>{data.products[1].name}</h5>
        <div className={`${classes.img} ${classes.backgroundGreen}`}>
          <img src="/lemonade2.png" className={classes.img} alt="lemonade" />
        </div>
        <div>
          <span
            className={`material-symbols-outlined ${classes.btnNumber}`}
            onClick={() => {
              setSecondLemonade((e: number) => (e <= 0 ? e : (e -= 1)));
            }}
          >
            arrow_back_ios
          </span>
          <span>{secondLemonade}</span>
          <span
            className={`material-symbols-outlined ${classes.btnNumber}`}
            onClick={() => {
              setSecondLemonade((e: number) => (e >= 10 ? e : (e += 1)));
            }}
          >
            arrow_forward_ios
          </span>
        </div>
        <span>${data.products[1].price}</span>
      </div>
      <div className={classes.Product}>
        <h5>{data.products[2].name}</h5>
        <div className={`${classes.img} ${classes.backgroundBlue}`}>
          <img src="/lemonade2.png" className={classes.img} alt="lemonade" />
        </div>
        <div>
          <span
            className={`material-symbols-outlined ${classes.btnNumber}`}
            onClick={() => {
              setThirdLemonade((e: number) => (e <= 0 ? e : (e -= 1)));
            }}
          >
            arrow_back_ios
          </span>
          <span>{thirdLemonade}</span>
          <span
            className={`material-symbols-outlined ${classes.btnNumber}`}
            onClick={() => {
              setThirdLemonade((e:number) => (e >= 10 ? e : (e += 1)));
            }}
          >
            arrow_forward_ios
          </span>
        </div>
        <span>${data.products[2].price}</span>
      </div>
    </>
  );
};

export default Lemeonades;
