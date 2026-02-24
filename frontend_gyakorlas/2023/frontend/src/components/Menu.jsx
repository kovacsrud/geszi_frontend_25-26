import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className="navbar bg-red-200">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl text-red-800">Főoldal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-red-800">
                    <li><Link to="/jaratok">Járatok</Link></li>
                    <li><Link to="/ujjarat">Új járat</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Menu