import '../styles/Header.css';

function Header({szoveg}) {
  return (
    <div className='header'>
        <h1>{szoveg}</h1>
    </div>
  )
}

export default Header