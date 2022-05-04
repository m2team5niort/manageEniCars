import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import Navbar from "./Navbar";
import { API } from 'aws-amplify';
import { listCars } from '../../graphql/queries'
import { createCar as createCarMutation, deleteCar as deleteCarMutation, updateCar as updateCarMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';
import { BellIcon, ExclamationIcon, ClockIcon, ArchiveIcon, StarIcon, DotsVerticalIcon, TrashIcon } from '@heroicons/react/solid'

export default function Notification() {

    return (
        <>

            <main id="Content">
                <div className='flex flex-row h-full w-full'>
                    <div className='flex flex-col h-full w-8/12 p-24 '>
                        <div className="shadow-md sm:rounded-lg bg-transparent ">
                            <div className='flex px-6 py-4'>
                                <div class="form-check mt-1">
                                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                </div>
                                <h1 className='text-white text-2xl ml-4'> Liste de vos dernières notifications </h1>
                                <BellIcon className='h-8 w-8 ml-4 text-white' />
                                <div className='w-2 border-l border-white ml-4'></div>
                                <TrashIcon className='h-8 w-8 ml-4 text-white' />
                                <ArchiveIcon className='h-8 w-8 ml-4 text-white' />
                                <StarIcon className='h-8 w-8 ml-4 text-white' />
                            </div>
                            <div className=' bg-transparent rounded-lg p-4'>
                                <div className='h-28 w-full shadow-xl bg-gray-800 rounded-lg flex flex-row '>
                                    <div className='flex flex-col h-full w-48 justify-center items-center'>
                                        <ExclamationIcon className='h-10 w-10 mb-4 text-white' />
                                        <span className="bg-red-500 text-white text-md font-semi-bold  px-2.5 py-0.5 rounded "> Important </span>
                                    </div>
                                    <div className='flex flex-col h-full w-full justify-center pl-2'>
                                        <h1 className='text-white text-2xl'> Titre de la notif </h1>
                                        <p className='text-gray-500 text-md mt-2'> Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor</p>
                                        <p className='text-gray-500 text-md'> Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor  </p>
                                    </div>
                                    <div className='flex flex-col h-full w-24 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='h-28 w-full mt-6 shadow-xl bg-gray-800 rounded-lg flex flex-row '>
                                    <div className='flex flex-col h-full w-48 justify-center items-center'>
                                        <ExclamationIcon className='h-10 w-10 mb-4 text-white' />
                                        <span className="bg-orange-500 text-white text-md font-semi-bold  px-2.5 py-0.5 rounded "> Moyen </span>
                                    </div>
                                    <div className='flex flex-col h-full w-full justify-center pl-2'>
                                        <h1 className='text-white text-2xl'> Titre de la notif </h1>
                                        <p className='text-gray-500 text-md mt-2'> Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor</p>
                                        <p className='text-gray-500 text-md'> Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor  </p>
                                    </div>
                                    <div className='flex flex-col h-full w-24 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-28 w-full mt-6 shadow-xl bg-gray-800 rounded-lg flex flex-row '>
                                    <div className='flex flex-col h-full w-48 justify-center items-center'>
                                        <ExclamationIcon className='h-10 w-10 mb-4 text-white' />
                                        <span className="bg-orange-500 text-white text-md font-semi-bold  px-2.5 py-0.5 rounded "> Moyen </span>
                                    </div>
                                    <div className='flex flex-col h-full w-full justify-center pl-2'>
                                        <h1 className='text-white text-2xl'> Titre de la notif </h1>
                                        <p className='text-gray-500 text-md mt-2'> Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor</p>
                                        <p className='text-gray-500 text-md'> Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor  </p>
                                    </div>
                                    <div className='flex flex-col h-full w-24 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-28 w-full mt-6 shadow-xl bg-gray-800 rounded-lg flex flex-row '>
                                    <div className='flex flex-col h-full w-48 justify-center items-center'>
                                        <ExclamationIcon className='h-10 w-10 mb-4 text-white' />
                                        <span className="bg-cyan-500 text-white text-md font-semi-bold  px-2.5 py-0.5 rounded "> Bas </span>
                                    </div>
                                    <div className='flex flex-col h-full w-full justify-center pl-2'>
                                        <h1 className='text-white text-2xl'> Titre de la notif </h1>
                                        <p className='text-gray-500 text-md mt-2'> Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor</p>
                                        <p className='text-gray-500 text-md'> Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor  </p>
                                    </div>
                                    <div className='flex flex-col h-full w-24 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-28 w-full mt-6 shadow-xl bg-gray-800 rounded-lg flex flex-row '>
                                    <div className='flex flex-col h-full w-48 justify-center items-center'>
                                        <ExclamationIcon className='h-10 w-10 mb-4 text-white' />
                                        <span className="bg-cyan-500 text-white text-md font-semi-bold  px-2.5 py-0.5 rounded "> Bas </span>
                                    </div>
                                    <div className='flex flex-col h-full w-full justify-center pl-2'>
                                        <h1 className='text-white text-2xl'> Titre de la notif </h1>
                                        <p className='text-gray-500 text-md mt-2'> Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor</p>
                                        <p className='text-gray-500 text-md'> Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor  </p>
                                    </div>
                                    <div className='flex flex-col h-full w-24 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-28 w-full mt-6 shadow-xl bg-gray-800 rounded-lg flex flex-row '>
                                    <div className='flex flex-col h-full w-48 justify-center items-center'>
                                        <ExclamationIcon className='h-10 w-10 mb-4 text-white' />
                                        <span className="bg-red-500 text-white text-md font-semi-bold  px-2.5 py-0.5 rounded "> Important </span>
                                    </div>
                                    <div className='flex flex-col h-full w-full justify-center pl-2'>
                                        <h1 className='text-white text-2xl'> Titre de la notif </h1>
                                        <p className='text-gray-500 text-md mt-2'> Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor</p>
                                        <p className='text-gray-500 text-md'> Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor sitae Lorem ipsum dolor  </p>
                                    </div>
                                    <div className='flex flex-col h-full w-24 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col h-full w-4/12 p-24'>
                        <div className='bg-gray-800 w-full rounded-lg p-6'>
                            <div className='flex flex-row h-12 text-white text-xl justify-center items-center'>
                                <h1> Gérer vos notifications </h1>
                            </div>
                            <div className='flex flex-row mt-4 h-12 text-white text-xl justify-center items-center space-x-2'>
                                <div className='flex flex-row w-1/3 h-full justify-center items-center'>
                                    <button className='h-12 bg-yellow-500 w-full rounded-lg flex space-x-4 justify-center items-center'>
                                        <ClockIcon className='h-6 w-6 text-white' />
                                        <p className='text-white'> En cours </p>
                                    </button>

                                </div>
                                <div className='flex flex-row w-1/3 h-full justify-center items-center space-x-4'>
                                    <button className='h-12  w-full rounded-lg flex space-x-4 justify-center items-center'>
                                        <ArchiveIcon className='h-6 w-6 text-white' />
                                        <p className='text-white'> En Archivées </p>
                                    </button>
                                </div>
                                <div className='flex flex-row w-1/3 h-full justify-center items-center space-x-4'>
                                    <button className='h-12  w-full rounded-lg flex space-x-4 justify-center items-center'>
                                        <StarIcon className='h-6 w-6 text-white' />
                                        <p className='text-white'> Favoris </p>
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col overflow-y-scroll text-white text-xl p-6 mt-8' style={{ height: "700px" }}>
                                <div className='h-24 flex flex-row w-full rounded-lg bg-white'>
                                    <div className='flex flex-col h-20 w-2/6 justify-center items-center'>
                                        <ExclamationIcon className='h-8 w-8 mb-2 text-gray-800' />
                                        <span className="bg-red-500 text-white text-sm font-normal px-2.5 py-0.5 rounded "> Important </span>
                                    </div>
                                    <div className='flex flex-col h-full w-3/6 p-2 justify-center items-center'>
                                        <h1 className='text-gray-800 text-2xl mr-6 font-semibold'> Titre de la notif </h1>
                                    </div>
                                    <div className='flex flex-col h-full w-1/6 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-24 flex flex-row w-full rounded-lg bg-white mt-8'>
                                    <div className='flex flex-col h-20 w-2/6 justify-center items-center'>
                                        <ExclamationIcon className='h-8 w-8 mb-2 text-gray-800' />
                                        <span className="bg-orange-500 text-white text-sm font-normal px-2.5 py-0.5 rounded "> Moyen </span>
                                    </div>
                                    <div className='flex flex-col h-full w-3/6 p-2 justify-center items-center'>
                                        <h1 className='text-gray-800 text-2xl mr-6 font-semibold'> Titre de la notif </h1>
                                    </div>
                                    <div className='flex flex-col h-full w-1/6 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-24 flex flex-row w-full rounded-lg bg-white mt-8'>
                                    <div className='flex flex-col h-20 w-2/6 justify-center items-center'>
                                        <ExclamationIcon className='h-8 w-8 mb-2 text-gray-800' />
                                        <span className="bg-cyan-500 text-white text-sm font-normal px-2.5 py-0.5 rounded "> Bas </span>
                                    </div>
                                    <div className='flex flex-col h-full w-3/6 p-2 justify-center items-center'>
                                        <h1 className='text-gray-800 text-2xl mr-6 font-semibold'> Titre de la notif </h1>
                                    </div>
                                    <div className='flex flex-col h-full w-1/6 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-24 flex flex-row w-full rounded-lg bg-white mt-8'>
                                    <div className='flex flex-col h-20 w-2/6 justify-center items-center'>
                                        <ExclamationIcon className='h-8 w-8 mb-2 text-gray-800' />
                                        <span className="bg-orange-500 text-white text-sm font-normal px-2.5 py-0.5 rounded "> Moyen </span>
                                    </div>
                                    <div className='flex flex-col h-full w-3/6 p-2 justify-center items-center'>
                                        <h1 className='text-gray-800 text-2xl mr-6 font-semibold'> Titre de la notif </h1>
                                    </div>
                                    <div className='flex flex-col h-full w-1/6 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-24 flex flex-row w-full rounded-lg bg-white mt-8'>
                                    <div className='flex flex-col h-full w-2/6 justify-center items-center'>
                                        <ExclamationIcon className='h-8 w-8 mb-2 text-gray-800' />
                                        <span className="bg-red-500 text-white text-sm font-normal px-2.5 py-0.5 rounded "> Important </span>
                                    </div>
                                    <div className='flex flex-col h-20 w-3/6 p-2 justify-center items-center'>
                                        <h1 className='text-gray-800 text-2xl mr-6 font-semibold'> Titre de la notif </h1>
                                    </div>
                                    <div className='flex flex-col h-full w-1/6 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-24 flex flex-row w-full rounded-lg bg-white mt-8'>
                                    <div className='flex flex-col h-20 w-2/6 justify-center items-center'>
                                        <ExclamationIcon className='h-8 w-8 mb-2 text-gray-800' />
                                        <span className="bg-red-500 text-white text-sm font-normal px-2.5 py-0.5 rounded "> Important </span>
                                    </div>
                                    <div className='flex flex-col h-full w-3/6 p-2 justify-center items-center'>
                                        <h1 className='text-gray-800 text-2xl mr-6 font-semibold'> Titre de la notif </h1>
                                    </div>
                                    <div className='flex flex-col h-full w-1/6 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-24 flex flex-row w-full rounded-lg bg-white mt-8'>
                                    <div className='flex flex-col h-20 w-2/6 justify-center items-center'>
                                        <ExclamationIcon className='h-8 w-8 mb-2 text-gray-800' />
                                        <span className="bg-red-500 text-white text-sm font-normal px-2.5 py-0.5 rounded "> Important </span>
                                    </div>
                                    <div className='flex flex-col h-full w-3/6 p-2 justify-center items-center'>
                                        <h1 className='text-gray-800 text-2xl mr-6 font-semibold'> Titre de la notif </h1>
                                    </div>
                                    <div className='flex flex-col h-full w-1/6 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-24 flex flex-row w-full rounded-lg bg-white mt-8'>
                                    <div className='flex flex-col h-20 w-2/6 justify-center items-center'>
                                        <ExclamationIcon className='h-8 w-8 mb-2 text-gray-800' />
                                        <span className="bg-red-500 text-white text-sm font-normal px-2.5 py-0.5 rounded "> Important </span>
                                    </div>
                                    <div className='flex flex-col h-full w-3/6 p-2 justify-center items-center'>
                                        <h1 className='text-gray-800 text-2xl mr-6 font-semibold'> Titre de la notif </h1>
                                    </div>
                                    <div className='flex flex-col h-full w-1/6 justify-center items-center'>
                                        <div class="form-check">
                                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>



        </>
    )
}