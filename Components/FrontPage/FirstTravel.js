import React from 'react';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className="w-[500px] mx-auto my-4" src="https://wallpaperaccess.com/full/3623101.jpg" alt="user photo" />
        <div className='flex flex-col justify-center'>
          <p className='text-blue-500 font-bold '> CREET UN TRAJET </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mt-2'> Gérer votre propre trajet ! </h1>
          <p className='mt-1'>
            Créer votre propre trajet, en choisissant la voiture la plus adaptée et les points de départ et d'arrivé.
            Vous pouvez également ajouter des collègues à votre trajet pour bénéficier des points positifs du covoiturage. 
          </p>
          </div>
      </div>
    </div>
  );
};

export default Analytics;
