import React from 'react';
import Typed from 'react-typed';
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-blue-500 font-bold p-2'>
          VOYAGER AVEC VOS COLLEGUES
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Le covoiturage en entreprise.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Rapide, flexible, 
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['économique', 'écologique']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'> Créer, réserver des trajets seul ou avec vos collègues afin de gagner du temps, de l'argent et sauver la planète. </p>
        <Link href='/myspace'>
        <button className='bg-blue-800 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white  hover:bg-blue-500 hover:text-white transition ease-in-out delay-15'> C'est partit ! </button>
        </Link>
        
      </div>
    </div>
  );
};

export default Hero;
