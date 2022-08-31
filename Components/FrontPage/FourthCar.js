import React from 'react';

const Analytics = () => {
  return (
    <div className='w-full text-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <div className='flex flex-col justify-center'>
          <p className='text-blue-500 font-bold '> LA 208 2 PORTES </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mt-2'> La citadine pour deux ! </h1>
          <p className='mt-1'>
            Cette voiture est idéale pour les trajets semi-long, pour se déplacer seul ou avec un collègue. 
            La voiture a 2 portes, un coffre de 265L idéal pour des bagages de type moyen. 
          </p>
        </div>
        <img className="w-[500px] mx-auto my-4" src="https://img4.autodeclics.com/photo_article/81205/12499/1200-L-la-gti-aussi-concernee.jpg" alt="user photo" />
        
      </div>
    </div>
  );
};

export default Analytics;
