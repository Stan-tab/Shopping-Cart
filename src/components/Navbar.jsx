import { NavLink, useSubmit } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar(props) {
  const submit = useSubmit();
  return (
    <nav>
      <input
        className={style.input}
        type="text"
        defaultValue={props.q}
        onChange={(e) => {
          submit(`q=${e.currentTarget.value}`);
        }}
      />
      <div className={style.container}>
        <h3>Categories</h3>
        <ul className={style.ul}>
          <NavLink>
            <li>Men's clothing</li>
          </NavLink>
          <NavLink>
            <li>Women's clothing</li>
          </NavLink>
          <NavLink>
            <li>Electronics</li>
          </NavLink>
          <NavLink>
            <li>Jewelery</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
