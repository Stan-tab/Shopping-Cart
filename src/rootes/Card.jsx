import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import style from "./Card.module.css";
import arrowImg from "../assets/arrow-left.svg";
import addShopCart from "../assets/addShopCart.svg"

export function loader(req) {
  return req.params.id;
}

export default function Card() {
  const id = useLoaderData();
  const { data } = useOutletContext();
  const navidate = useNavigate();
  let prod = null;

  for (const i in data) {
    if (!Object.prototype.hasOwnProperty.call(data, i)) {
      break;
    }
    const element = data[i];
    if (element.id === +id) {
      prod = element;
      break;
    }
  }

  return (
    <div className={style.content}>
      <button onClick={() => navidate(-1)}>
        <img src={arrowImg} alt="back" />
      </button>
      <div>
        <img src={prod.image} alt={prod.title} />
        <button>
          <img src={addShopCart} alt="" />
        </button>
        <p>{prod.title}</p>
        <div>
          <p>{prod.category}</p>
          <p>{prod.price}</p>
        </div>
        <p>{prod.description}</p>
      </div>
    </div>
  );
}
