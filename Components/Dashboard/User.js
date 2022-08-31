import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import { API } from 'aws-amplify';
import { listCars, listLocations, listModels, getCar } from '../../graphql/queries'
import { createCar as createCarMutation, deleteCar as deleteCarMutation, updateCar as updateCarMutation } from '../../graphql/mutations';
import { createKey as createKeyMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';


let initialFormState = { name: '', description: '', modele: '', places: '' }

export default function User({ username }) {

    return (
        <>

            <main  id="Content">
                <div className='h-full w-full  p-24'>
                <div className="shadow-md sm:rounded-lg bg-gray-700 ">
                    <div className='flex justify-between px-6 py-4'>
                        <h1 className='text-white '> Liste des utilisateurs </h1>
                        <button onClick={() => setModal({ ...modal, isShow: true, type: 'add' })} className="bg-teal-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded "> Ajouter un utilisateur </button>
                    </div>
                                
                                <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                                    <thead className="text-xs text-white uppercase bg-transparent dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col-1" className="px-6 py-3">
                                                #
                                            </th>
                                            <th scope="col-3" className="px-6 py-3">
                                                Nom
                                            </th>
                                            <th scope="col-4" className="px-6 py-3">
                                                Description
                                            </th>
                                            <th scope="col-2" className="px-6 py-3">
                                                Modèle
                                            </th>
                                            <th scope="col-1" className="px-6 py-3">
                                                Nb Places
                                            </th>
                                            <th scope="col-1" className="px-6 py-3 text-center">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        <tr className="bg-gray-700 hover:text-gray-900 transition text-gray-400 font-semibold hover:bg-gray-50">
                                            <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                                
                                            </th>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                
                                            </td>
                                            <td className="px-6 py-4 relative text-center">
                                                <MyDropdown  />
                                            </td>
                                        </tr>
                                    }
                                    </tbody>
                                </table>
                            </div>
                </div>
            </main>



        </>
    )
}