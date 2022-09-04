import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import { API } from 'aws-amplify';
import { listLocations } from '../../graphql/queries'
import { createLocation as createLocationMutation, deleteLocation as deleteLocationMutation, updateLocation as updateLocationMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';

const initialFormState = { name: '', city: '', departement: '', zip: '', streetNumber: '', longitude: '', latitude: '' }

export default function Location() {

    const [locations, setLocations] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [modal, setModal] = useState({
        isShow: false,
        type: '',
        page: 'location',
        object: {}
    });

    useEffect(() => {
        fetchLocations();
    }, []);

    async function fetchLocations() {
        const apiData = await API.graphql({ query: listLocations });
        setLocations(apiData.data.listLocations.items);
    }

    async function createLocation() {
        if (!formData.name || !formData.city) return;

        await API.graphql({ query: createLocationMutation, variables: { input: formData } }).then((res) => {
            setLocations([...locations, res.data.createLocation]);
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false });
        }).catch((err) => {
            console.log(err)
        });
    }

    async function updateLocation({ id }) {
        formData.id = id

        await API.graphql({ query: updateLocationMutation, variables: { input: formData } }).then((res) => {
            let index = locations.findIndex((obj => obj.id === id));
            locations[index] = res.data.updateLocation
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false })
        }).catch((err) => {
            console.log(err)
        });

    }

    async function deleteLocation({ id }) {
        const newLocationsArray = locations.filter(location => location.id !== id);
        setLocations(newLocationsArray);
        await API.graphql({ query: deleteLocationMutation, variables: { input: { id } } });
    }

    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} updateObject={updateLocation} createObject={createLocation} setFormData={setFormData} formData={formData} />
            }

            <main id="Content">
                <div className='flex flex-row w-full p-24 gap-12 max-h-full'>
                    <div className="shadow-md sm:rounded-lg bg-gray-700 w-full flex flex-col overflow-x-auto overflow-y-auto">
                        <div className='flex justify-between px-6 py-4'>
                            <h1 className='text-white '> Liste des lieux </h1>
                            <button onClick={() => setModal({ ...modal, isShow: true, type: 'add' })} className="bg-amber-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded"> Ajouter un lieu </button>
                        </div>

                        <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-transparent dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col-1" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col-3" className="px-6 py-3">
                                        Nom
                                    </th>
                                    <th scope="col-4" className="px-6 py-3">
                                        Ville
                                    </th>
                                    <th scope="col-2" className="px-6 py-3">
                                        Département
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Code postal
                                    </th>
                                    <th scope="col-1" className="px-6 py-3 text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    locations.map((location, index) => (
                                        <tr key={index} className="bg-gray-700 hover:text-gray-900 transition text-gray-400 font-semibold hover:bg-gray-50">
                                            <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                                {index + 1}
                                            </th>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="bg-emerald-500 text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded "> {location.name} </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {location.city}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {location.departement}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="bg-amber-500 text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded "> {location.zip} </span>
                                            </td>
                                            <td className="px-6 py-4 relative text-center">
                                                <MyDropdown object={location} deleteObject={deleteLocation} modal={modal} setModal={setModal} listObjects={[]} />
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