import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="navbar bg-sky-200 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Főoldal</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/episodes">Episodes</Link>
          </li>         
        </ul>
      </div>
    </div>
  );
}

export default Menu;
