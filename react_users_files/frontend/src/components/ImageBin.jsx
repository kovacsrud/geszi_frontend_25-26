import { useContext } from "react"
import ImageContext from "../context/ImageContext"

function ImageBin({image,data}) {
  const {imgDeleteBin}=useContext(ImageContext);
  const {imageName,_id}=image;
  return (
    <div>
       <figure>
        <img
          src={data}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{imageName}</h2>
        <p>
          
        </p>
        <div className="card-actions justify-end">
          <button onClick={()=>imgDeleteBin(_id)} className="btn btn-primary">Törlés</button>
        </div>
      </div>
    </div>
  )
}

export default ImageBin