import Main from "./components/Main";
import Tanulok from "./components/Tanulok";
import Menu from "./components/Menu";
import TanuloForm from "./components/TanuloForm";

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';


function App() {
  
  return (
    
      <div>                
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tanulok" element={<Tanulok />}/>
            <Route path="/tanuloform" element={<TanuloForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>

      </div>
       
    
  )
}

export default App
 
6