import Books from '../assets/books.png';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <nav className="bg-green-600 p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-white text-xl font-semibold"><Link to="/"><img className="w-10 h-10" src={Books} /></Link></h1>
                    <div className="flex space-x-6">
                        <Link to="/tanulok" className="text-white hover:text-green-100 transition-colors">Tanulók</Link>
                        <a href="#" className="text-white hover:text-green-100 transition-colors">Jelentkezések</a>
                        <Link to="/tanuloform" href="#" className="text-white hover:text-green-100 transition-colors">Új tanuló</Link>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu