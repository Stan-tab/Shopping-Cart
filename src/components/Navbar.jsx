import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav>
      <input type="text" defaultValue={props.q} onChange={props.change} />
      <div>
        <h3>Categories</h3>
        <ul>
          <li>
            <NavLink>Men's clothing</NavLink>
          </li>
          <li>
            <NavLink>Women's clothing</NavLink>
          </li>
          <li>
            <NavLink>Electronics</NavLink>
          </li>
          <li>
            <NavLink>Jewelery</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
