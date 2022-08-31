import React from 'react';

const Analytics = () => {
  return (
    <div className='w-full text-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <div className='flex flex-col justify-center'>
          <p className='text-blue-500 font-bold '> JOINDRE UN TRAJET </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mt-2'> Rejoignez un trajet déjà existant ! </h1>
          <p className='mt-1'>
            Vous avez besoin de vous déplacer ? Rejoignez un trajet existant proposé par un de vos collègues. Vous y trouverez tous les avantages du covoiturage !
          </p>
        </div>
        <img className="w-[500px] mx-auto my-4" src="https://images.pling.com/img/00/00/45/66/30/1170534/26d7fc7a2b6c04ab74f06b301bbdf88f7bfd.jpg" alt="user photo" />
        
      </div>
    </div>
  );
};

export default Analytics;
