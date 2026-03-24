

function Termek({termek}) {
  return (
   
   <div className="termekek-card">
        <div className="termekek-card-body">
            <h2 className="termekek-card-title">{termek.termekNev}</h2>
            <p className="termekek-card-detail">Leírás:{termek.leiras} </p>
            <p className="termekek-card-detail">Ár:{termek.ar} </p>
            <p className="termekek-card-detail">Eladó neve:{termek.elado} </p>
            <p className="termekek-card-detail">Email:{termek.email} </p>
            <p className="termekek-card-detail">Telefon:{termek.telefonszam} </p>
        </div>
    </div>
   
  )
}

export default Termek