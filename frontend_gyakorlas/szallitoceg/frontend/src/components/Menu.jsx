import '../styles/Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <Link to="/" className="menu-item">Főoldal</Link>
      <Link to="/szallitmanyok" className="menu-item">Szállítmányok</Link>
      <Link to="/ujszallitmany" className="menu-item">Új szállítmány leadása</Link>
    </div>
  )
}

export default Menu