// Imports Used
import react, { useState } from "react";
import Script from "next/script"
import Link from 'next/link';
import GetCar from "../Components/HomePage/GetCar";



// Home function
export default function Home() {

    // Consts
    const [car, setCar] = useState('Taycan')

    return (

        /* Full Container */
        <div className="text-gray-700 bg-white antialiased">

            {/* Navbar */}
            <nav className="flex items-center justify-between flex-wrap p-6 fixed space-between w-full">

                {/* Logo Navbar */}
                <div className="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
                    {/* <img src="../assets/images/Compressed_Images/Logo_Compressed.png" style={{width: '100%', height: '50px'}} loading="lazy"/> */}
                    <h1 className="text-white"> ManageCars </h1>
                </div>

                {/* Toggle Navbar */}
                <div className="block lg:hidden">
                    <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title> Menu </title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                <div className="self-center">

                    <Link href="/">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
                            Taycan
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
                            911
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
                            Panamera
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
                            GT3 RS
                        </a>
                    </Link>
                </div>


                {/* Menu Navbar (Links) */}
                <div id="nav-content" className="">
                    <div className="text-sm lg:flex-grow ">


                        <Link href="/">
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
                                <button className="text-white font-semibold"> Accueil </button>
                            </a>
                        </Link>
                        <Link href="/signup">
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
                                <button className="text-white font-semibold"> Connexion </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>



            {/* Foreach Cars */}
            <div className="imgCarsHeader pt-48">
                {/* Menu Choose Cars Header */}

                <GetCar title={car} />
            </div>


            {/* Footer */}
            <footer className="bg-white mb-4" style={{ display: 'flex' }}>
                <ul className="text-gray-600 flex justify-center w-full">
                    <li className="pr-8" > ENI ManageCars © 2022 </li>
                    <li className="pr-8" > Mentions légales </li>
                    <li className="pr-8"> Contact</li>
                    <li className="pr-8"> Plan du site </li>
                    <li className=""> Actualité </li>
                </ul>
            </footer>

            {/* Used Scripts */}
            <Script src="../assets/js/script.js" />

        </div>

    )
}
