import Studying from '../assets/studying.png';


function TanuloCard({ tanulo }) {
    return (

        <div className="w-96 max-w-md px-8 py-4 m-5 mt-16 bg-green-300 rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={Studying} />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{tanulo.nev}</h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Hozott pont:<span className='font-bold'>{tanulo.hozott}</span></p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Központi felvételi magyar:<span className='font-bold'>{tanulo.kpmagy}</span></p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Központi felvételi matek:<span className='font-bold'>{tanulo.kpmat}</span></p>

            <div className="flex justify-end mt-4">
                <button className="btn bg-green-700 text-green-300">Törlés</button>
            </div>
        </div>

    )
}

export default TanuloCard