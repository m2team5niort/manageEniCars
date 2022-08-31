import React from 'react';
import Link from 'next/link';


const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className="w-[500px] mx-auto my-4" src="https://assets.largus.fr/mixad/h/renault/megane-4-1-7-blue-dci-150ch-business-intens-edc/B3LMMdvQlAEV0biezGggblkoTyXDOWKOOhViLvOYERcP4wZOFuN4DxLuBkiLf5ts6O3Fkn-YiSrYE7QhgspaKt9e_5AUIaJQRmvfsu_JtKwX5PnfrXgAjnlH_J2A73u1.jpg?w=800&h=600&fit=fill" alt="user photo" />
        <div className='flex flex-col justify-center'>
          <p className='text-blue-500 font-bold '> LE PARC AUTOMOBILE </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Choisir la voiture qui vous convient </h1>
          <p>
            En fonction de vos besoins, vous pouvez choisir la voiture qui vous convient le mieux. Par exemple vous pouvez filtrer le parc automobile en fonction de la taille de 
            voiture, du nombre de portes, de la taille du coffre, etc ...
          </p>
          <Link href='/listCars'>
          <button className='bg-blue-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> En savoir plus </button>
        </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Analytics;
