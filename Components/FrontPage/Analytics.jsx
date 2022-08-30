import React from 'react';
import Laptop from '../../public/assets/images/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-blue-500 font-bold '> LE PARC AUTOMOBILE </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Choisir la voiture qui vous convient </h1>
          <p>
            En fonction de vos besoins, vous pouvez choisir la voiture qui vous convient le mieux. Par exemple vous pouvez filtrer le parc automobile en fonction de la taille de 
            voiture, du nombre de portes, de la taille du coffre, etc ...
          </p>
          <button className='bg-black text-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> En savoir plus </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
