import Main from "./components/Main";
import Menu from "./components/Menu";
import Vevok from "./components/Vevok";
import UjVevo from "./components/UjVevo";
import Header from "./components/Header";
import Termekek from "./components/Termekek";
import UjTermek from "./components/UjTermek";


import {BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';


function App() {
  

  return (
    <>
     <Header headerText={"Webshop feladat"} />
     <Router>
       <Menu />
       <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/vevok" element={<Vevok />} />
            <Route path="/ujvevo" element={<UjVevo />} />
            <Route path="/termekek" element={<Termekek />} />
            <Route path="/ujtermek" element={<UjTermek />} />
            <Route path="*" element={<Navigate to="/" />} />
       </Routes>

     </Router>
      
      
    </>
  )
}

export default App
