import React from 'react';
import Single from '../../public/assets/images/single.png'
import Double from '../../public/assets/images/double.png'
import Triple from '../../public/assets/images/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'> Créer votre trajet </h2>
              <p className='text-center text-4xl font-bold'> Le plus répendu </p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'> Gérer votre propre trajet </p>
                  <p className='py-2 border-b mx-8'> Choisissez votre voiture </p>
                  <p className='py-2 border-b mx-8'> Emmenner des collègues avec vous </p>
              </div>
              <button className='bg-blue-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> En savoir plus </button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'> Joindre un trajet </h2>
              <p className='text-center text-4xl font-bold'> Le plus rapide </p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'> Rejoindre un trajet existant </p>
                  <p className='py-2 border-b mx-8'> Choisissez votre voiture </p>
                  <p className='py-2 border-b mx-8'> Faite la route avec vos collègues </p>
              </div>
              <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> En savoir plus </button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
