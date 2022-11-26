import { useRef, useState } from "react";
import data from "./Data";

import classes from "./MenuPage.module.css";
import lemonade from "../img/lemonade.png";

interface prop {
  onchange: boolean;
  language: string;
}
interface dataInformation {
  firstProduct: {
    title: string;
    paragraph: string;
    price: string;
  };
  secondProduct: {
    title: string;
    paragraph: string;
    price: string;
  };
}
interface prop {
  onchange: boolean;
  language: string;
}

const Menu = ({ onchange, language }: prop) => {
  const [product, setProduct] = useState(true);
  const changeProduct = useRef<HTMLDivElement | null>(null);
  const Data: dataInformation = data[language === "ENG" ? "ENG" : "POR"].Menu;

  const clickHandler = (boolean: boolean) => {
    product !== boolean &&
      changeProduct.current?.classList.remove(classes.change);
    setTimeout(() => {
      setProduct(boolean);
      changeProduct.current?.classList.add(classes.change);
    }, 1);
  };

  const styleClasses = (
    boolean: boolean | null,
    style1: string,
    style2: string,
    style3: string
  ) => {
    if (boolean === null) {
      return onchange
        ? classes[style1] + " " + classes[style2]
        : classes[style1] + " " + classes[style3];
    }
    return product === boolean
      ? classes[style1] + " " + classes[style2]
      : classes[style1] + " " + classes[style3];
  };

  return (
    <div className={classes.container}>
      <div className={classes.containerProducts}>
        <div
          ref={changeProduct}
          className={styleClasses(
            null,
            "containerProductsInformation",
            "productAnimation",
            ""
          )}
        >
          <h4>
            {product ? Data.firstProduct.title : Data.secondProduct.title}
          </h4>
          <p>
            {product
              ? Data.firstProduct.paragraph
              : Data.secondProduct.paragraph}
          </p>
          <span>
            {product ? Data.firstProduct.price : Data.secondProduct.price}
          </span>
        </div>
        <div
          className={styleClasses(
            null,
            "containerImg",
            "productImgAnimation",
            ""
          )}
        >
          <div className={classes.product}></div>
          <div className={classes.containerProduct}>
            <div
              className={styleClasses(
                true,
                "firstProduct",
                "firstanimation",
                " "
              )}
              onClick={clickHandler.bind(null, true)}
            >
              <img src={lemonade.src} className={classes.img} alt="lemonade" />
            </div>
            <div
              className={styleClasses(
                false,
                "secondProduct",
                "secondAnimation",
                "secondMoveBack"
              )}
              onClick={clickHandler.bind(null, false)}
            >
              <img src={lemonade.src} className={classes.img} alt="lemonade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
