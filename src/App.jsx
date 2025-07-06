import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import styled from "styled-components";
// import shopData from "../data.json"; //remove

export async function loader({request}) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  return q;
}

function getAll(data, q) {
  const newArr = [];
  if (!q) return data;
  for (let i = 0; i < data.length; i++) {
    const prod = data[i];
    if (prod.title.toLowerCase().includes(q.toLowerCase())) {
      newArr.push(prod);
    }
  }
  return newArr;
}

const Footer = styled.footer`
  text-align: center;
  padding-top: 10px;
  grid-column: 1/3;
`;

function App() {
  const q = useLoaderData();
  const [shopData, setShopData] = useState(null);
  const [sendData, setSendData] = useState(shopData);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error(`Error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setShopData(data);
        setSendData(data);
      })
      .catch((e) => setError(e))
      .finally(() => setLoader(true));
  }, []);

  useEffect(() => {
    setSendData(getAll(shopData, q));
  }, [q]);

  return (
    <>
      <Header />
      <Navbar />
      <Outlet context={{ data: sendData, error, loader }} />
      <Footer>
        <a href="https://github.com/Stan-tab">My github</a>
      </Footer>
    </>
  );
}

export default App;
