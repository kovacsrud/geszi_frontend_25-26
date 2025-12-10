function Kutyanev({ kutyanev }) {
  return (
    <div className="m-5 card card-border bg-lime-400 w-96">
      <div className="card-body">
        <h2 className="card-title">{kutyanev.kutyanev}</h2>
        <p>
         Id:{kutyanev.Id}
        </p>
        <div className="card-actions justify-end">
         <button className="btn btn-primary">Módosítás</button>
         <button className="btn btn-primary">Törlés</button>
        </div>
      </div>
    </div>
  );
}

export default Kutyanev;
