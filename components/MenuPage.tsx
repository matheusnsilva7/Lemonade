import { useEffect, useRef, useState } from "react";
import data from "./Data";

import classes from "./MenuPage.module.css";
import lemonade from "../img/lemonade.png";

const Menu = ({
  onchange,
  language,
}: {
  onchange: boolean;
  language: string;
}) => {
  const [product, setProduct] = useState(true);
  const changeProduct = useRef<HTMLDivElement | null>(null)
  const Data: {
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
  } = data[language === "ENG" ? "ENG" : "POR"].Menu;
  
  useEffect(()=>
    changeProduct.current?.classList.add(classes.change)
  ,[product])

  return (
    <div className={classes.container}>
      <div className={classes.containerProducts}>
        <div
          ref={changeProduct}
          className={
            onchange
              ? classes.productAnimation +
                " " +
                classes.containerProductsInformation
              : classes.containerProductsInformation
          }
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
          className={
            onchange
              ? classes.productImgAnimation + " " + classes.containerImg
              : classes.containerImg
          }
        >
          <div className={classes.product}></div>
          <div className={classes.containerProduct}>
            <div
              className={
                product
                  ? classes.firstanimation + " " + classes.firstProduct
                  : classes.firstProduct
              }
              onClick={() => {
                !product && setTimeout(() =>  setProduct(true) , 300);
                !product && changeProduct.current?.classList.remove(classes.change)
              }}
            >
              <img src={lemonade.src} className={classes.img} alt="lemonade" />
            </div>
            <div
              className={
                !product
                  ? classes.secondProduct + " " + classes.secondAnimation
                  : classes.secondProduct + " " + classes.secondMoveBack
              }
              onClick={() =>  {
                product && setTimeout(() =>  setProduct(false) , 300)
                product && changeProduct.current?.classList.remove(classes.change)
              }
              }
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
