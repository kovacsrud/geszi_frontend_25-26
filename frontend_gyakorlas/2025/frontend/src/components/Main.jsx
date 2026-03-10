import Student from '../assets/student.svg';

function Main() {
    return (
        <header className="bg-white dark:bg-gray-900">
            <nav className="border-t-4 border-green-700">

            </nav>

            <div className="container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">szöveg <span className="text-green-700">Felvételi 2025</span></h1>

                            <p className="mt-3 text-gray-600 dark:text-gray-400">Tanulói felvételi adatok a<span className="font-medium text-green-700">2025-26</span> tanévre.</p>


                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-full h-full max-w-md" src={Student} />
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Main