import type { Result } from "../types/Result";



function RandomUser( {result}:Result) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={result.picture.large}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{result.name.first} {result.name.last}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default RandomUser