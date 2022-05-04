import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
<<<<<<< HEAD
import { API } from 'aws-amplify';
import MyDropdown from './Dropdown';

const initialFormState = { name: '', description: '' }

export default function Reservation() {

    const [formData, setFormData] = useState(initialFormState);
    const [modal, setModal] = useState({
        isShow: false,
        type: '',
        page: 'reservation',
        object: {}
    });

    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} setFormData={setFormData} formData={formData} />
            }


            <main id="Content">
                <div className='h-full w-full  p-24'>
                    <div className="shadow-md sm:rounded-lg bg-gray-700 ">
                        <div className='flex justify-between px-6 py-4'>
                            <h1 className='text-white '> Liste des réservations </h1>
                            <button onClick={() => setModal({ ...modal, isShow: true, type: 'add' })} className="bg-blue-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> Ajouter une réservation </button>
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
                                        Marque
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col-1" className="px-6 py-3 text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
=======
import Navbar from "./Navbar";
import { API } from 'aws-amplify';
import { listCars } from '../../graphql/queries'
import MyDropdown from './Dropdown';

let initialFormState = { name: '', description: '', modele: '', places: '' }

export default function Reservation({ username }) {

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
>>>>>>> a462f16 (Modifications Notifications Page -> Adding icons for actions)
                </div>
            </main>



        </>
    )
}