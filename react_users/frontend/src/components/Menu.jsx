import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Menu() {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  const token = sessionStorage.getItem("usertoken");

  return (
    <div className="navbar bg-sky-200 shadow-sm">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost text-xl">Users</Link>
      </div>
      <div className="flex-none">
        {token ? (
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/vedett">Védett info</Link>
            </li>
            <li>
              <a onClick={()=>{logout();navigate('/')}}>Kilépés</a>
            </li>
          </ul>
        ) : (
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
        
      </div>
    </div>
  );
}

export default Menu;
