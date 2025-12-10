import { KutyaProvider } from "./context/KutyaContext";
import Kutyanevek from "./components/Kutyanevek";
import Kutyafajtak from "./components/Kutyafajtak";
import RendelesiAdatok from "./components/RendelesiAdatok";
import KutyanevForm from "./components/formok/KutyanevForm";
import Main from "./components/Main";
import Menu from "./components/Menu";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';



function App() {
  

  return (
   
      <div>
        <KutyaProvider>
          <BrowserRouter>
            <Menu />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/kutyanevek" element={<Kutyanevek />} />
              <Route path="/kutyafajtak" element={<Kutyafajtak />} />
              <Route path="/rendelesiadatok" element={<RendelesiAdatok />} />
              <Route path="/kutyanevform" element={<KutyanevForm />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </KutyaProvider>
        
      </div>
  )
}

export default App
