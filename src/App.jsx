import { useState } from "react";
import styles from "./App.module.css";
import styled from "styled-components";

const Smt = styled.p`
  color: red;
  background-color: #3f1f1f;
  &::after {
    content: " ;)";
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a className={styles.a} href="https://vite.dev" target="_blank">
          "Vite logo"
        </a>
        <a className={styles.a} href="https://react.dev" target="_blank">
          {" "}
          "React logo"
        </a>
      </div>
      <h1 className={styles.h1}>Vite + React</h1>
      <div className={styles.card}>
        <button
          className={styles.button}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <Smt>
          Edit <code>src/App.jsx</code> and save to test HMR
        </ Smt>
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
