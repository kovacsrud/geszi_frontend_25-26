function Character({ character }) {
  return (
    <div className="m-5 p-4 card bg-sky-200 text-sky-800 w-96 shadow-sm">
      <figure>
        <img
          src={character.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{character.name}</h2>
        <p>Status:{character.status}</p>
        <p>Species:{character.species}</p>
        <p>Location:{character.location.name}</p>
        <div className="card-actions justify-end">
          
        </div>
      </div>
    </div>
  );
}

export default Character;
