type HeaderProps={
    headerText:string,
    id:number
}

function Header({headerText,id}:HeaderProps) {
  return (
    <div>
        <h1 className="text-3xl text-center text-green-700">{headerText}</h1>
        <h2 className="text-xl text-red-600">{id}</h2>
    </div>
  )
}

export default Header