
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Termekek from './components/Termekek';
import Termekfeltoltes from './components/Termekfeltoltes';

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';




function App() {
  return (
    <div>
      <Header szoveg="Pici piac Kft." />
      <BrowserRouter>
        <Menu />
        <Routes>
           <Route path='/' element={<Main />} />
           <Route path='/termekek' element={<Termekek />} />
           <Route path='/termekfeltoltes' element={<Termekfeltoltes />} />
           <Route path='*' element={<Navigate to='/' />} />
        </Routes>      
      </BrowserRouter>

	  </div>
  );
}
export default App;
