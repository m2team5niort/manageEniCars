import React from 'react';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className="w-[500px] mx-auto my-4" src="https://www.autojm.fr/media/cache/resolve/vehicle_medium/media/vehicle/0006/29/blanc-jpg_3d06eff9587ea23f7195e6f391183604af83b2e3.jpeg" alt="user photo" />
        <div className='flex flex-col justify-center'>
          <p className='text-blue-500 font-bold '> LA 208 5 PORTES </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mt-2'> La citadine pratique ! </h1>
          <p className='mt-1'>
            Cette voiture est idéale pour les la ville comme pour les trajets semi-long, pour se déplacer avec ses collègues. 
            La voiture a 5 portes, un coffre de 265L idéal pour des bagages moyens. 
          </p>
          </div>
      </div>
    </div>
  );
};

export default Analytics;
