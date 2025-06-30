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
      <header>
        <div>
          <img src="./Shopping-Cart/shoppingCart.svg" alt="" />
          <p>Stan's mall</p>
        </div>
        <button className={styles.btn} onClick={() => setClick((e) => !e)}>
          <img src="./Shopping-Cart/acCircle.svg" alt="" />
          <p>Cool user</p>
          <ul className={!isClicked ? styles.ulInvisible : styles.ulVisible}>
            <a href="">
              <li>Account</li>
            </a>
            <a href="">
              <li>Cart</li>
            </a>
            <a href="">
              <li>FAQ</li>
            </a>
          </ul>
        </button>
      </header>
      <nav>nav</nav>
      <Outlet />
      <footer>footer</footer>
    </>
  );
}

export default App;
