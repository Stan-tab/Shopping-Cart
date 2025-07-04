import { useLoaderData, useOutletContext } from "react-router-dom";
import style from "./Card.module.css"

export function loader(req) {
  return req.params.id;
}

export default function Card() {
  const id = useLoaderData();
  const { data } = useOutletContext();
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

  console.log(prod)

  return (
    <div className={style.content}>
        <button>
            <img src="./arrow-left.svg" alt="back" />
        </button>
    </div>
  );
}
