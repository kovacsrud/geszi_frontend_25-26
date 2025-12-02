import Menu from './components/Menu';
import Main from './components/Main';
import Tanulok from './components/Tanulok';

import UjTanulo from './components/UjTanulo';

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  

  return (
   
      <div>
        <BrowserRouter>
          <Menu />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/tanulok' element={<Tanulok />} />
          <Route path='/ujtanulo' element={<UjTanulo />} />
          <Route path='*' element={<Navigate to='/' />} />

        </Routes>  
              
        </BrowserRouter>
        
      </div>
  )
}

export default App
