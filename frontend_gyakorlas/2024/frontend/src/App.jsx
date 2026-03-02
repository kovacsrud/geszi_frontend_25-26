import Header from "./components/Header"
import Main from "./components/Main"
import Menu from "./components/Menu"
import Termekek from "./components/Termekek"
import UjTermek from "./components/UjTermek"

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'


function App() {
  

  return (
    <div>
      <Header szoveg="Webshop"/>
      <BrowserRouter>
        <Menu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/termekek" element={<Termekek />}/>
            <Route path="/ujtermek" element={<UjTermek />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </BrowserRouter>
    
    
      
      
    </div>
  )
}

export default App
