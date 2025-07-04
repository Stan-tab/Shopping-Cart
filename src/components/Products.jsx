import style from "./Products.module.css";
import { Link } from "react-router-dom";

export default function Products({ data }) {
  return (
    <div className={style.box}>
      {data.map((element) => {
        return (
          <div key={element.id} className={style.container}>
            <div className={style.imgContainer}>
              <Link to={`product/${element.id}`}>
                <img
                  src={element.image}
                  alt={element.title}
                  className={style.img}
                />
              </Link>
              <button className={style.toCart}>
                <img src="./addShopCart.svg" alt="add to the cart" />
              </button>
            </div>
            <p>{element.title}</p>
            <div className={style.addInfo}>
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
