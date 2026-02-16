import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Vedett from "./components/Vedett";
import Upload from "./components/Upload";
import UploadBin from "./components/UploadBin";
import Images from "./components/Images";
import ImagesBin from "./components/ImagesBin";
import { UserProvider } from "./context/UserContext";
import { ImageProvider } from "./context/ImageContext";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  

  return (
   
      <div>
        <UserProvider>
          <ImageProvider>
          <BrowserRouter>
            <Menu />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/vedett" element={<Vedett />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/uploadbin" element={<UploadBin />}/>
              <Route path="/images" element={<Images />} />
              <Route path="/imagesbin" element={<ImagesBin />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
          </ImageProvider>
        </UserProvider>                
      </div>
  )
}

export default App
