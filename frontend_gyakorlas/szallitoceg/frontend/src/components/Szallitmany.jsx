

function Szallitmany({szallitmany}) {
  return (
   <div className="szallitmany-card">
        <div className="szallitmany-card-body">
            <h2 className="szallitmany-card-title">{szallitmany.id}</h2>
            <p className="szallitmany-card-detail">Név:{szallitmany.nev} </p>
            <p className="szallitmany-card-detail">Email:{szallitmany.email} </p>
            <p className="szallitmany-card-detail">Telefonszám:{szallitmany.telefonszam} </p>
            <p className="szallitmany-card-detail">Irányítószám:{szallitmany.irszam} </p>
            <p className="szallitmany-card-detail">Város:{szallitmany.varos} </p>
            <p className="szallitmany-card-detail">Utca:{szallitmany.utca} </p>
            <p className="szallitmany-card-detail">Házszám:{szallitmany.hazszam} </p>
            <p className="szallitmany-card-detail">Megjegyzés:{szallitmany.megjegyzes} </p>
        </div>
    </div>
  )
}

export default Szallitmany