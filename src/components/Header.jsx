import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import acCircle from "../assets/acCircle.svg";
import shoppingCart from "../assets/shoppingCart.svg";

export default function Header() {
  const [isClicked, setClick] = useState(false);

  return (
    <header className={styles.header}>
      <div
        className={styles.logo}
        onClick={() => {
          const nav = document.querySelector("nav");
          [...nav.classList].includes("show")
            ? nav.classList.remove("show")
            : nav.classList.add("show");
        }}
      >
        <img src={shoppingCart} alt="" />
        <p>Stan's mall</p>
      </div>
      <div className={styles.header}>
        <div className={styles.shopCartContainer}>
          <Link to={"cart"} style={{ display: "contents" }}>
            <img
              className={styles.shopCart}
              src={shoppingCart}
              alt="Shoping cart"
            />
          </Link>
        </div>
        <div style={{ position: "relative" }}>
          <button className={styles.btn} onClick={() => setClick((e) => !e)}>
            <img src={acCircle} alt="" />
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
