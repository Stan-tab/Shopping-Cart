import { useNavigate, useOutletContext } from "react-router-dom";
import style from "../components/Products.module.css";
import arrowImg from "../assets/arrow-left.svg";

export default function Cart() {
  let { data } = useOutletContext();
  const navigate = useNavigate();
  data = data.filter((e) => e.inBucket);

  return (
    <div className={style.box} style={{ position: "relative" }}>
      <button
        onClick={() => navigate(-1)}
        style={{ position: "absolute", left: 0, zIndex: 1 }}
      >
        <img src={arrowImg} alt="back" />
      </button>
      <div className={style.prodContainer}>
        {data.map((element) => {
          return (
            <div key={element.id} className={style.container}>
              <div className={style.imgContainer}>
                <img
                  src={element.image}
                  alt={element.title}
                  className={style.img}
                />
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
      <div className={style.price}>
        <h3>
          <b>Total</b>
        </h3>
        <p>{data.reduce((total, current) => total + current.price, 0)}</p>
      </div>
    </div>
  );
}
