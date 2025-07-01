import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isClicked, setClick] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./shoppingCart.svg" alt="" />
        <p>Stan's mall</p>
      </div>
      <div className={styles.header}>
        <div className={styles.shopCartContainer}>
          <img className={styles.shopCart} src="./shoppingCart.svg" alt="Shoping cart" />
        </div>
        <div style={{ position: "relative" }}>
          <button className={styles.btn} onClick={() => setClick((e) => !e)}>
            <img src="./acCircle.svg" alt="" />
            <p>Cool user</p>
          </button>
          <ul className={!isClicked ? styles.ulInvisible : styles.ulVisible}>
            <a href="#">
              <li>Account</li>
            </a>
            <a href="#">
              <li>Cart</li>
            </a>
            <a href="#">
              <li>FAQ</li>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}
