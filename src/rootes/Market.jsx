import { useLoaderData, useOutletContext } from "react-router-dom";
import Products from "../components/Products";

export async function loader({ request }) {
  const url = new URL(request.url).pathname.split("/");
  const path = url.at(-1) || url.at(-2);
  return decodeURIComponent(path);
}

function getCategoryData(data, cat) {
  const newArr = [];
  for (let i = 0; i < data.length; i++) {
    const prod = data[i];
    if (prod.category.toLowerCase() === cat.toLowerCase()) {
      newArr.push(prod);
    }
  }
  return newArr;
}

export default function Market() {
  let { data } = useOutletContext();
  const { error, loader } = useOutletContext();
  const category = useLoaderData();
  if (category) {
    data = getCategoryData(data, category);
  }
  return (
    <>
      {data ? (
        <Products data={data} />
      ) : error ? (
        <p>Ooops, api server does not respond</p>
      ) : (
        loader && <p>Loading...</p>
      )}
    </>
  );
}
