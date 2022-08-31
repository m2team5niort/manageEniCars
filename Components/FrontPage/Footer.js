import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-blue-500'> MANAGE CARS. </h1>
        <p className='py-4'> N'hésitez pas à vous rendre sur nos différents réseaux sociaux. </p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
       
    </div>
    <div>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
        <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'></h6>
        <ul>
            
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
