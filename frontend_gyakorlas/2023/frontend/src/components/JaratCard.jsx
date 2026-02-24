

function JaratCard({jarat}) {
  return (
   <div className="card w-96 bg-red-200 shadow-xl m-5">
    <div className="card-body">
      <h2 className="card-title">{jarat.jaratSzam}</h2>
      <p>Járat típusa: {jarat.jaratTipus}</p>
      <p>Elsőajtós felszállás: {jarat.elsoAjtos ? "Igen":"Nem"}</p>
      <div className="card-actions justify-end">
       
      </div>
    </div>
  </div>
  )
}

export default JaratCard