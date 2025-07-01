import { useState } from "react";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <nav>nav</nav>
      <Outlet />
      <footer>footer</footer>
    </>
  );
}

export default App;
