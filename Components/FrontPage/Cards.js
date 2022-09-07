import React from 'react';
import Link from 'next/link';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'> Créer votre trajet </h2>
              <p className='text-center text-4xl font-bold'> Le plus répendu </p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'> Gérer votre propre trajet </p>
                  <p className='py-2 border-b mx-8'> Choisir votre voiture </p>
                  <p className='py-2 border-b mx-8'> Emmenner des collègues avec vous </p>
              </div>
              <Link href='/travel'>
              <button className='bg-blue-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> En savoir plus </button>
        </Link>
              
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src="https://img.favpng.com/19/12/24/computer-icons-users-group-user-profile-multi-user-png-favpng-3iWyMjWgHwJy31ZSWrXKHHDFX.jpg" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'> Joindre un trajet </h2>
              <p className='text-center text-4xl font-bold'> Le plus rapide </p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'> Rejoindre un trajet existant </p>
                  <p className='py-2 border-b mx-8'> Choisir votre voiture </p>
                  <p className='py-2 border-b mx-8'> Faite la route avec vos collègues </p>
              </div>
              <Link href='/travel'>
              <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'> En savoir plus </button>
        </Link>
              
          </div>
      </div>
    </div>
  );
};

export default Cards;
