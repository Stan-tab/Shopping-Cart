import { useState } from "react";
import styles from "./App.module.css";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Smt = styled.p`
  color: red;
  background-color: #3f1f1f;
  &::after {
    content: " ;)";
  }
`;

function App() {
  const [isClicked, setClick] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="./Shopping-Cart/shoppingCart.svg" alt="" />
          <p>Stan's mall</p>
        </div>
        <div style={{position: "relative"}}>
          <button className={styles.btn} onClick={() => setClick((e) => !e)}>
            <img src="./Shopping-Cart/acCircle.svg" alt="" />
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
      </header>
      <nav>nav</nav>
      <Outlet />
      <footer>footer</footer>
    </>
  );
}

export default App;
