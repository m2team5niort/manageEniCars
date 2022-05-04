import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import Navbar from "./Navbar";
import { API } from 'aws-amplify';
import { listKeys } from '../../graphql/queries'
import { createKey as createKeyMutation, deleteKey as deleteKeyMutation, updateKey as updateKeyMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';

let initialFormState = { name: '', description: '', modele: '', places: '' }

export default function Key({ username }) {

    const [keys, setKeys] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [modal, setModal] = useState({
        isShow: false,
        type: '',
        page: 'key',
        object: {}
    });

    useEffect(() => {
        fetchKEys();
    }, []);

    async function fetchKeys() {
        const apiData = await API.graphql({ query: listKeys });
        setCars(apiData.data.listKeys.items);
    }

    async function createKey() {
        if (!formData.name || !formData.description) return;

        await API.graphql({ query: createKeyMutation, variables: { input: formData } }).then((res) => {
            setCars([...cars, res.data.createKey]);
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false });
        }).catch((err) => {
            console.log(err)
        });

    }

    async function updateKey({ id }) {

        formData.id = id

        await API.graphql({ query: updateKeyMutation, variables: { input: formData } }).then((res) => {
            let index = keys.findIndex((obj => obj.id === id));
            keys[index] = res.data.updateKey
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false })
        }).catch((err) => {
            console.log(err)
        });

    }

    async function deleteKey({ id }) {
        const newKeysArray = keys.filter(key => key.id !== id);
        setCars(newKeysArray);
        await API.graphql({ query: deleteKeyMutation, variables: { input: { id } } });
    }

    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} updateObject={updateKey} createObject={createKey} setFormData={setFormData} formData={formData} />
            }

            <main  id="Content">
                <div className='h-full w-full  p-24'>
                <div className="shadow-md sm:rounded-lg bg-gray-700 ">
                    <div className='flex justify-between px-6 py-4'>
                        <h1 className='text-white '> Liste des voitures </h1>
                        <button onClick={() => setModal({ ...modal, isShow: true, type: 'add' })} className="bg-green-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> Ajouter une voiture </button>
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
                                        cars.map((car, index) => (
                                        <tr className="bg-gray-700 hover:text-gray-900 transition text-gray-400 font-semibold hover:bg-gray-50">
                                            <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                                {index + 1}
                                            </th>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="bg-green-500 text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> {car.name} </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {car.description}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {car.modele}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="bg-red-500 text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> {car.places} </span>
                                            </td>
                                            <td className="px-6 py-4 relative text-center">
                                                <MyDropdown object={car} deleteObject={deleteCar} modal={modal} setModal={setModal} />
                                            </td>
                                        </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                </div>
            </main>



        </>
    )
}