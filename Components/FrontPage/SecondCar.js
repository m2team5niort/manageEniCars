import React from 'react';

const Analytics = () => {
  return (
    <div className='w-full text-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <div className='flex flex-col justify-center'>
          <p className='text-blue-500 font-bold '> LA MEGANE 2 PORTES </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mt-2'> La voiture pour voyager seul ou à deux ! </h1>
          <p className='mt-1'>
            Cette voiture est idéale pour les longs trajets, pour se déplacer seul ou avec un collègue. 
            La voiture a 2 portes, un coffre de 400L idéal pour plusieurs bagages. 
          </p>
        </div>
        <img className="w-[500px] mx-auto my-4" src="https://www.automobile-magazine.fr/asset/cms/840x394/50528/config/37907/sur-la-megane-2-la-version-trois-portes-etait-moins-chere-que-la-cinq-portes-mais-sur-la-troisieme-generation-ce-nest-plus-le-cas-la-megane-coupe-affiche-des-tarifs-dacces-plus-eleves-que-la-berline-heureusement-son-rapport-prix-equipement-est-equivalent.jpg" alt="user photo" />
        
      </div>
    </div>
  );
};

export default Analytics;
