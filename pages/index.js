// Imports Used
import Script from "next/script"
import Link from 'next/link';
import Navbar from "../Components/FrontPage/Navbar";
import Hero from "../Components/FrontPage/Hero";
import Analytics from "../Components/FrontPage/Analytics";
import Newsletter from "../Components/FrontPage/Newsletter";
import Cards from "../Components/FrontPage/Cards";
import Footer from "../Components/FrontPage/Footer";

// Home function
export default function Home() {

  return (
<<<<<<< HEAD

    <div className="bg-gray-100 text-gray-700 bg-white antialiased">

      <div className="bg-white min-h-screen">
        <nav className="flex items-center justify-between flex-wrap p-6 space-between w-full bg-indigo-800">

        {/* Logo Navbar */}
        <div className="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
          {/* <img src="../assets/images/Compressed_Images/Logo_Compressed.png" style={{width: '100%', height: '50px'}} loading="lazy"/> */}
          <h1 className="text-gray-600"> ManageCars </h1>
          
        </div>

          <div className="block lg:hidden">
            <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title> Menu </title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

        {/* Menu Navbar (Links) */}
        <div id="nav-content" className="">
          <div className="text-sm lg:flex-grow ">


            <Link href="/">
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
                <button className="text-gray-600 font-semibold"> Accueil </button>
              </a>
            </Link>
            <Link href="/signup">
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
                <button className="text-gray-600 font-semibold"> Connexion </button>
              </a>
            </Link>
          </div>
        </div>
      </nav>

    {/* Header */}
    <div className="header ">

      {/* NavBar Height */}
      <div className="row h-20 "></div>

      {/* Title Container */}
      <div className="row ">
        
        {/* Title */}
        <div className="w-1/4 h-2/4 ml-96 mt-24">
          <h1 className="text-9xl "> Mégane 5 </h1>
        </div>
      </div>

      {/* Image Container */}
      <div className="row ">
        
        {/* Title */}
        <div className="mt-24 flex justify-center relative">
          
          <img className="w-8/12 ml-72 shadow-2xl" src="../assets/images/Background/b5.jpeg"/>

          <div className="flex flex-col absolute -bottom-12 right-48 space-y-8">
            <div className="w-48 h-48 bg-gray-800 shadow-2xl">
              <img className="object-cover h-full w-full" src="../assets/images/Background/b5.jpeg"/>
            </div>
            <div className="w-48 h-48 bg-gray-800 shadow-2xl">
              <img className="object-cover h-full w-full" src="../assets/images/Background/b5.jpeg"/>
            </div>
          </div>
          
          <div className="flex flex-row absolute bottom-8 space-x-8 justify-center mr-12">
            <div className="bg-gray-300 shadow-2xl">
              <button className=" text-gray-800 rounded py-4 px-8 font-bold"> Réserver ce véhicule </button>
            </div>
            <div className="bg-gray-300 shadow-2xl">
              <button className=" text-gray-800 rounded py-4 px-8 font-bold"> Plus d'informations </button>
            </div>
          </div>

        </div>
      </div>
    </div>

      {/* <footer className="bg-white h-12 text-center pt-12" style={{ display: 'flex' }}>

        <ul className="text-gray-600 flex justify-center w-full pt-2  ">
          <li className="pr-8" > ENI ManageCars © 2022 </li>
          <li className="pr-8" > Mentions légales </li>
          <li className="pr-8"> Contact</li>
          <li className="pr-8"> Plan du site </li>
          <li className=""> Actualité </li>
        </ul>
      </footer> */}



      <Script src="../assets/js/script.js" />

    </div>

  )
=======
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
>>>>>>> f3a0387 (modif 2)
}