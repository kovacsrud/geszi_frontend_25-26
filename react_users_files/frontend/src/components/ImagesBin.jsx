import {useState,useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ImageBin from './ImageBin'
import UserContext from '../context/UserContext'

function ImagesBin() {
  const{update,refresh}=useContext(UserContext);
  const[images,setImages]=useState([]);
  const[binImages,setBinImages]=useState([]);

  const navigate=useNavigate();
  const token=sessionStorage.getItem('usertoken');

  useEffect(()=>{
    if(token){
      fetch('http://localhost:8000/api/imagesbin',{
        method:'GET',
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      .then(res=>res.json())
      .then(adatok=>{
        let tempImages=[];
        adatok.forEach(image=>{
          let arrayBuffer=new Uint8Array(image.imageData.data);
          const blob=new Blob([arrayBuffer],{type:"image/png"});
          const img=URL.createObjectURL(blob);
          tempImages.push(img);
        });

        setImages(adatok);
        setBinImages(tempImages);

      })
      .catch(err=>alert(err));

    } else {
      navigate('/login')
    }
  },[refresh])

  return (
    <div>
      <h2 className='text-2xl text-sky-800 text-center font-bold'>Feltöltött képek(b)</h2>
      <div className='flex flex-row flex-wrap items-center justify-center'>
        {
          images.map((image,i)=>(<ImageBin key={i} image={image} data={binImages[i]} />))
        }

      </div>
    </div>
  )
}

export default ImagesBin