import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";
import Main from "./components/Main";
import Menu from "./components/Menu";

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  

  return (
   
      <div>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
        
      </div>
  )
}

export default App
