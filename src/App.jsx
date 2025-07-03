import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import shopData from "../data.json"; //remove

const Footer = styled.footer`
  text-align: center;
  padding-top: 10px;
  grid-column: 1/3;
`;

function App() {
  // const [shopData, setShopData] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    /* fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error(`Error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setShopData(data))
      .catch((e) => setError(e))
      .finally(() => setLoader(true));*/
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <Outlet context={{ data: shopData, error, loader }} />
      <Footer>
        <a href="https://github.com/Stan-tab">My github</a>
      </Footer>
    </>
  );
}

export default App;
