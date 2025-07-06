import { NavLink, useSubmit } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  const submit = useSubmit();
  return (
    <nav>
      <input
        className={style.input}
        type="text"
        placeholder="search e.g backpack"
        onChange={(e) => {
          submit(`q=${e.currentTarget.value}`);
        }}
      />
      <div className={style.container}>
        <h3>Categories</h3>
        <ul className={style.ul}>
          <NavLink to={"Men's clothing"}>
            <li>Men's clothing</li>
          </NavLink>
          <NavLink to={"Women's clothing"}>
            <li>Women's clothing</li>
          </NavLink>
          <NavLink to={"Electronics"}>
            <li>Electronics</li>
          </NavLink>
          <NavLink to={"Jewelery"}>
            <li>Jewelery</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
