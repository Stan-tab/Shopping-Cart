import style from "./Products.module.css";
import { Link } from "react-router-dom";

export default function Products({ data }) {
  return (
    <div className={style.box}>
      {data.map((element) => {
        return (
          <div key={element.id}>
            <Link to={`${element.id}`}>
              <img src={element.image} alt={element.title} />
            </Link>
            <p>{element.title}</p>
            <div>
              <p>{element.category}</p>
              <p>{element.price}</p>
            </div>
            <p>{element.description}</p>
          </div>
        );
      })}
    </div>
  );
}
