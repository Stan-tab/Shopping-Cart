import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <input type="text" />
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
