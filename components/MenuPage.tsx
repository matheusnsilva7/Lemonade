import { useRef, useState } from "react";
import data from "./Data";
import Image from "next/image";

import classes from "./MenuPage.module.css";

interface prop {
  onchange: boolean;
  language: string;
}
interface dataInformation {
  3: { title: string; paragraph: string; price: string };
  2: { title: string; paragraph: string; price: string };
  1: { title: string; paragraph: string; price: string };
}

const Menu = ({ onchange, language }: prop) => {
  const [product, setProduct] = useState(2);
  const changeProduct = useRef<HTMLDivElement | null>(null);
  const Data: dataInformation | any =
    data[language === "ENG" ? "ENG" : "POR"].Menu;

  const clickHandler = (boolean: number) => {
    product !== boolean &&
      changeProduct.current?.classList.remove(classes.change);
    setTimeout(() => {
      setProduct(boolean);
      changeProduct.current?.classList.add(classes.change);
    }, 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.containerProducts}>
        <div
          ref={changeProduct}
          className={`
            ${classes.containerProductsInformation} 
            ${onchange && classes.productAnimation}
          `}
        >
          <h4>{Data[product].title}</h4>
          <p>{Data[product].paragraph}</p>
          <span>{Data[product].price}</span>
        </div>
        <div
          className={` ${classes.containerImg} ${
            onchange && classes.productImgAnimation
          }
          `}
        >
          <div className={classes.product}></div>
          <div
            className={`
              ${classes.secondProduct}
              ${product === 1 && classes.secondAnimation}
              ${onchange && classes.secondMoveBack}
            `}
            onClick={clickHandler.bind(null, 1)}
          >
            <Image
              src="/lemonade2.png"
              width={140}
              height={400}
              className={classes.img}
              priority={true}
              alt="lemonade"
            />
            <h5 className={classes.text}>Large</h5>
          </div>
          <div
            className={`
              ${classes.firstProduct}
              ${product === 2 && classes.firstanimation}
              `}
            onClick={clickHandler.bind(null, 2)}
          >
            <Image
              src="/lemonade2.png"
              width={140}
              height={400}
              className={classes.img}
              priority={true}
              alt="lemonade"
            />
            <h5 className={classes.text}>Medium</h5>
          </div>
          <div
            className={`
              ${classes.secondProduct}
              ${product === 3 && classes.thirdAnimation}
              ${onchange && classes.secondMoveBack}
            `}
            style={{ background: "#ffff0050" }}
            onClick={clickHandler.bind(null, 3)}
          >
            <Image
              src="/lemonade2.png"
              width={140}
              height={400}
              priority={true}
              className={classes.img}
              alt="lemonade"
            />
            <h5 className={classes.text}>Small</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
