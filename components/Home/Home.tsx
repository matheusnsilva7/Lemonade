import Link from "next/link";

import classes from "./Home.module.css";

const Home = ({ onchange }: { onchange: boolean }) => {
  return (
    <div className={classes.container}>
      <h1 className={onchange ? classes.title : ""}>The lemonade stand</h1>
      <p className={onchange ? classes.subtitle : ""}>
        the most fresh and healthy lemonade stand
      </p>
      <div>
        <Link
          className={
            onchange ? classes.buttonAnimation + " " + classes.btn : classes.btn
          }
          href="menu"
        >
          MENU
        </Link>
        <Link
          className={
            onchange ? classes.buttonAnimation + " " + classes.btn : classes.btn
          }
          href="#"
        >
          STORES
        </Link>
      </div>
    </div>
  );
};

export default Home;
