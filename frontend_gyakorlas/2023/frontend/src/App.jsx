import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import UjJarat from "./components/UjJarat";
import Jaratok from "./components/Jaratok";

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {
 

  return (
    <div>
      <Header szoveg="Trolibusz hálózat"/>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/jaratok" element={<Jaratok />} />
          <Route path="/ujjarat" element={<UjJarat />} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>      
      </BrowserRouter>

    </div>
  )
}

export default App
