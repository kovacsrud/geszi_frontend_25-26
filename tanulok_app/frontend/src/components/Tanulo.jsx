function Tanulo({tanulo}) {
  return (
    <div className="m-5 card card-dash bg-emerald-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{tanulo.vezeteknev} {tanulo.keresztnev}</h2>
        <p>
          Magasság:{tanulo.magassag}
        </p>
        <p>
          Email:{tanulo.email}
        </p>
        <div className="card-actions justify-end">
          
        </div>
      </div>
    </div>
  );
}

export default Tanulo;
