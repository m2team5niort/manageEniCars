// Imports Used
import Script from "next/script"
import Link from 'next/link';

// Home function
export default function Home() {

  return (

    <>

      <div className="bg-white min-h-screen">
        <nav className="flex items-center justify-between flex-wrap p-6 space-between w-full bg-indigo-800">

          <div className="flex items-center flex-shrink-0 text-dark md:text-right">
            <h1 className="text-2xl text-white font-semibold"> ManageCars </h1>
          </div>

          <div className="block lg:hidden">
            <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title> Menu </title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div id="nav-content">
            <div className="text-sm lg:flex-grow">
              <Link href="/">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                  <button className="text-white font-semibold hover:text-teal-200"> Accueil </button>
                </a>
              </Link>
              <Link href="/signup">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                  <button className="text-white font-semibold hover:text-teal-200"> Connexion </button>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-indigo-900 min-h-screen flex items-center">

        <div className="px-12">

          <div className="flex justify-center items-center relative space-x-8">

            <img onClick={() => console.log('click')} className="opacity-50 shadow-2xl object-cover h-60 w-96 rounded-md hover:opacity-100 transition ease-in duration-300 cursor-pointer" src="../assets/images/homepage/b6.jpg" />

            <div className="flex flex-row relative shadow-2xl homepage-car rounded-3xl">
              <h1 className="text-9xl text-white font-semibold -top-20 -left-24 absolute"> Mégane 5 </h1>
              <div className="flex flex-row absolute bottom-6 left-8 space-x-8 justify-center">
                <div className="bg-indigo-800 shadow-2xl hover:bg-indigo-700 transition ease-in duration-300">
                  <button className="text-white rounded py-2 px-6">Réserver ce véhicule</button>
                </div>
                <div className="bg-indigo-800 shadow-2xl hover:bg-indigo-700 transition ease-in duration-300">
                  <button className="text-white rounded py-2 px-6">Plus d'informations</button>
                </div>
              </div>
            </div>

            <img onClick={() => console.log('click')} className="opacity-50 shadow-2xl object-cover h-60 w-96 rounded-md hover:opacity-100 transition ease-in duration-300 cursor-pointer" src="../assets/images/homepage/b7.jpg" />

          </div>
        </div>

      </div>
      <footer className="bg-white h-12 text-center pt-12" style={{ display: 'flex' }}>
        <ul className="text-gray-600 flex justify-center w-full pt-2  ">
          <li className="pr-8" > ENI ManageCars © 2022 </li>
          <li className="pr-8" > Mentions légales </li>
          <li className="pr-8"> Contact</li>
          <li className="pr-8"> Plan du site </li>
          <li className=""> Actualité </li>
        </ul>
      </footer>
    </>
  )
}