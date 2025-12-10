import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="navbar bg-lime-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Main</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/kutyanevek">Kutyanevek</Link>
          </li>
           <li>
            <Link to="/kutyafajtak">Kutyafajtak</Link>
          </li>
           <li>
            <Link to="/rendelesiadatok">Rendelési adatok</Link>
          </li>
           <li>
            <Link to="/kutyanevform">Új kutyanév</Link>
          </li>         
        </ul>
      </div>
    </div>
  );
}

export default Menu;
