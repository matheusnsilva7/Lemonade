import classes from "./MenuPage.module.css";
import lemonade from "../../img/lemonade.png";
import { useState } from "react";

const Menu = ({ onchange }: { onchange: boolean }) => {
  const [product, setProduct] = useState(true);

  return (
    <div className={classes.container}>
      <div className={classes.containerProducts}>
        <div
          className={
            onchange
              ? classes.productAnimation +
                " " +
                classes.containerProductsInformation
              : classes.containerProductsInformation
          }
        >
          <h4>Lemonade</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            assumenda sapiente totam cum, labore, at incidunt veniam est ullam,
            dicta aperiam maxime sit nulla quisquam? Vitae ipsam cupiditate
            totam quod?
          </p>
          <span>R$13,30</span>
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

              onClick={()=> setProduct(true)}
            >
              <img src={lemonade.src} className={classes.img} alt="lemonade" />
            </div>
            <div className={
                !product
                  ? classes.secondProduct + " " + classes.secondAnimation
                  : classes.secondProduct + " " + classes.secondMoveBack
              } onClick={()=> setProduct(false)}>
              <img src={lemonade.src} className={classes.img} alt="lemonade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
