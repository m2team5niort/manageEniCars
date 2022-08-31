import React from 'react';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className="w-[500px] mx-auto my-4" src="https://assets.largus.fr/mixad/h/renault/megane-4-1-7-blue-dci-150ch-business-intens-edc/B3LMMdvQlAEV0biezGggblkoTyXDOWKOOhViLvOYERcP4wZOFuN4DxLuBkiLf5ts6O3Fkn-YiSrYE7QhgspaKt9e_5AUIaJQRmvfsu_JtKwX5PnfrXgAjnlH_J2A73u1.jpg?w=800&h=600&fit=fill" alt="user photo" />
        <div className='flex flex-col justify-center'>
          <p className='text-blue-500 font-bold '> LA MEGANE 5 PORTES </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mt-2'> La voiture la plus grande! </h1>
          <p className='mt-1'>
            Cette voiture est idéale pour les longs trajets, pour se déplacer avec ses collègues. 
            La voiture a 5 portes, un coffre de 400L idéal pour plusieurs bagages. 
          </p>
          </div>
      </div>
    </div>
  );
};

export default Analytics;
