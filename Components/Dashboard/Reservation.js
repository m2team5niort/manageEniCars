import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import { API } from 'aws-amplify';
import { listTravels } from '../../graphql/queries'
import MyDropdown from './Dropdown';


let initialFormState = { name: '', description: '', modele: '', places: '' }

export default function Reservation({ username }) {

    const [travels, setTravels] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [modal, setModal] = useState({
        isShow: false,
        type: '',
        page: 'reservation',
        object: {},
        listObjects: []
    });

    useEffect(() => {
        fetchTravels();
    }, []);

    async function fetchTravels() {
        await API.graphql({ query: listTravels }).then((res) => {
            setTravels(res.data.listTravels.items)
        });
    }

    return (
        <>
            <main id="Content">
                <div className='px-8 w-full'>
                    <div className="shadow-md bg-gray-50 rounded-lg">
                        <div className='flex justify-between px-6 py-4'>
                            <h1 className='text-dark'> Liste des réservation </h1>
                            <button onClick={() => setModal({ ...modal, isShow: true, type: 'add' })} className="bg-blue-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded"> Ajouter une réservation </button>
                        </div>       
                        <table className="text-sm text-left text-dark dark:text-gray-400 bg-gray-50">
                            <thead className="text-xs text-dark uppercase">
                                <tr>
                                    <th scope="col-1" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Conducteur
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Voiture
                                    </th>
                                    <th scope="col-2" className="px-6 py-3">
                                        Départ
                                    </th>
                                    <th scope="col-2" className="px-6 py-3">
                                        Arrivée
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Nb Places
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Lieu de départ
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Lieu d'arrivée
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Nb de passagers
                                    </th>
                                    <th scope="col-1" className="px-6 py-3 text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {travels.map((travel,index) => {
                                return(
                                    <tr className="bg-gray-50 hover:text-gray-900 transition text-dark font-semibold">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {index+1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {travel.driver.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {travel.car.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {new Date(travel.dateBegin).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {new Date(travel.dateEnd).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {travel.places}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {travel.departure.city}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {travel.arrival.city}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {travel.passengers.length}
                                        </td>
                                        <td className="px-6 py-4 relative text-center">
                                            <MyDropdown  />
                                        </td>
                                </tr>
                                )
                            })
                            }
                            </tbody>
                        </table>
                     </div>
                </div>
            </main>



        </>
    )
}