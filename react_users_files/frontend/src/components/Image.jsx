import { useContext } from "react";
import ImageContext from "../context/ImageContext";

function Image({path,image}) {
  const {imageName,_id}=image;
  const {imgDelete}=useContext(ImageContext);

  return (
    <div className="m-10 card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={`http://localhost:8000${path}/${imageName}`}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{imageName}</h2>
        <p>
          
        </p>
        <div className="card-actions justify-end">
          <button onClick={()=>imgDelete(_id)} className="btn btn-primary">Törlés</button>
        </div>
      </div>
    </div>
  );
}

export default Image;
