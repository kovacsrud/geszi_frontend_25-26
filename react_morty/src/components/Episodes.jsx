import { useState,useEffect } from "react";

function Episodes() {
  const[episodes,setEpisodes]=useState([]);
  const[info,setInfo]=useState({});
  const[page,setPage]=useState(1);

    const getEpisodes = () => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then((res) => res.json())
      .then((adat) => {
        setEpisodes(adat.results);
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
    getEpisodes();
  }, [page]);


  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-sky-800">Episodes</h1>
      {
        episodes.map((episode,i)=>(<p key={episode.id}>{episode.name}</p>))
      }
    </div>
  )
}

export default Episodes