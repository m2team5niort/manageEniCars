import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import Navbar from "./Navbar";
import { API, graphqlOperation } from 'aws-amplify';
import { listKeys, listCars, listLocations, listKeysExtend } from '../../graphql/queries'
import { createKey as createKeyMutation, deleteKey as deleteKeyMutation, updateKey as updateKeyMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';

let initialFormState = { keyCarId: "", keyLocationId: "" }

export default function Key() {

    const [keys, setKeys] = useState([]);
    const [cars, setCars] = useState([]);
    const [locations, setLocations] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [modal, setModal] = useState({
        isShow: false,
        type: '',
        page: 'key',
        object: {},
        listObjects: []
    });

    useEffect(() => {
        fetchKeys();
        fetchCars();
        fetchLocations();
    }, []);

    async function fetchKeys() {
        const apiData = await API.graphql({ query: listKeys });
        setKeys(apiData.data.listKeys.items);
    }

    async function fetchCars() {
        const apiData = await API.graphql({ query: listCars });
        setCars(apiData.data.listCars.items);
    }

    async function fetchLocations() {
        const apiData = await API.graphql(graphqlOperation(listLocations, { filter: { isReferenced: { eq: true } } }))
        setLocations(apiData.data.listLocations.items);
    }

    async function createKey() {
        await API.graphql({ query: createKeyMutation, variables: { input: formData } }).then((res) => {
            setKeys([...keys, res.data.createKey]);
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
        setKeys(newKeysArray);
        await API.graphql({ query: deleteKeyMutation, variables: { input: { id } } });
    }

    console.log(modal.object)

    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} updateObject={updateKey} createObject={createKey} setFormData={setFormData} formData={formData} />
            }

            <main id="Content">
                <div className='px-8'>
                    <div className="shadow-md sm:rounded-lg bg-gray-50 ">
                        <div className='flex justify-between px-6 py-4'>
                            <h1 className='text-white '> Liste des clés </h1>
                            <button onClick={() => setModal({ ...modal, isShow: true, type: 'add', listObjects: [cars, locations] })} className="bg-blue-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> Ajouter une clé </button>
                        </div>

                        <table className=" w-full text-sm text-left text-dark">
                            <thead className="text-xs text-dark uppercase bg-transparent">
                                <tr>
                                    <th scope="col-1" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col-3" className="px-6 py-3">
                                        Nom de la voiture
                                    </th>
                                    <th scope="col-4" className="px-6 py-3">
                                        Nom du lieu
                                    </th>
                                    <th scope="col-1" className="px-6 py-3 text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    keys.map((key, index) => (
                                        <tr className="bg-gray-50 hover:text-gray-900 transition text-dark font-semibold hover:bg-gray-50">
                                            <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                                {index + 1}
                                            </th>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {key.car !== null ? key.car.name : 'Clé sans voiture'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                            {key.location !== null ? key.location.name : 'Clé sans lieu'}
                                            </td>
                                            <td className="px-6 py-4 relative text-center">
                                                <MyDropdown object={key} listObjects={[cars, locations]} deleteObject={deleteKey} modal={modal} setModal={setModal} />
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