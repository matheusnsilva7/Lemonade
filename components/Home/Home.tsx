import Link from "next/link";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <h1>The lemonade stand</h1>
      <p>the most fresh and healthy lemonade stand</p>
      <div>
        <Link className={classes.btn} href="menu">
          MENU
        </Link>
        <Link className={classes.btn} href="#">
          STORES
        </Link>
      </div>
    </div>
  );
};

export default Home;
