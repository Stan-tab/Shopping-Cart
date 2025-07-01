import { useOutletContext } from "react-router-dom";
import Products from "../components/Products";

export default function Market() {
  const {data, error, loader} = useOutletContext();
  return (
    <>
      {data ? <Products data={data} /> : error ? "fuck" : loader && "loading"}
    </>
  );
}
