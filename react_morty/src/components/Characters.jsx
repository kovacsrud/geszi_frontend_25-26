import { useState, useEffect } from "react";
import Character from "./Character";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);

  const getCharacters = () => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((adat) => {
        setCharacters(adat.results);
        setInfo(adat.info);
      })
      .catch((err) => alert(err));
  };

  const novel = () => {
    if (page < info.pages) {
      setPage((prev) => prev + 1);
    }
  };

  const csokkent = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-sky-700">
        Characters
      </h1>
      <div className="m-5 flex flex-row items-center justify-center">
        <div className="join">
          <button onClick={csokkent} className="join-item btn">«</button>
          <button className="join-item btn">Page {page}</button>
          <button onClick={novel} className="join-item btn">»</button>
        </div>
      </div>
      
      <div className="flex flex-row flex-wrap items-center justify-center">
        {characters.map((character, i) => (
          <Character key={i} character={character} />
        ))}
      </div>

       <div className="m-5 flex flex-row items-center justify-center">
        <div className="join">
          <button onClick={csokkent} className="join-item btn">«</button>
          <button className="join-item btn">Page {page}</button>
          <button onClick={novel} className="join-item btn">»</button>
        </div>
      </div>
    </div>
  );
}

export default Characters;
