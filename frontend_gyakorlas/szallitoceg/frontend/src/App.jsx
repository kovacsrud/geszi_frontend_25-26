
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import Szallitmanyok from './components/Szallitmanyok';
import UjSzallitmany from './components/UjSzallitmany';

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  return (
   <div>
      <Header szoveg="ExPortál futárszolgálat" />
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/szallitmanyok' element={<Szallitmanyok />} />
          <Route path='/ujszallitmany' element={<UjSzallitmany />} />
          <Route path='*' element={<Navigate to="/" />} />

        </Routes>            
      </BrowserRouter>

	 </div>
  );
}
export default App;
