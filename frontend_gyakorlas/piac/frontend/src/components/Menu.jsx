import '../styles/Menu.css'
import { Link } from 'react-router-dom';


function Menu() {
    return (

        <div className="menu">
            <Link to='/' className="menu-item">Főoldal</Link>
            <Link to='/termekek' className="menu-item">Termékek</Link>
            <Link to='/termekfeltoltes' className="menu-item">Termék eladása</Link>
        </div>

    )
}

export default Menu