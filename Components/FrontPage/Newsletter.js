import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Des questions ? Envoyez-nous vos demandes.
          </h1>
          <p> Envoyer nous vos demandes à l'adresse email çi jointe, afin d'avoir une réponse. </p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-blue-600'
              type='email'
              placeholder='enimanagecars@gmail.com'
              disabled
            />
          </div>
          <p className='mt-4'>
            Nous faisons attention à la protection de vos données. Lisez nos {' '}
            <span className='text-blue-500'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
