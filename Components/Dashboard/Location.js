import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import { API } from 'aws-amplify';
import { listLocations } from '../../graphql/queries'
import { createLocation as createLocationMutation, deleteLocation as deleteLocationMutation, updateLocation as updateLocationMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';

const initialFormState = { name: '', city: '', departement: '', zip: '', streetNumber: '', longitude: '', latitude: '' }

export default function Location() {

    const [locations, setLocations] = useState([]);
    const [locationSearch, setLocationSearch] = useState();
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
        setLocationSearch(apiData.data.listLocations.items[0]);
    }

    function onChangeSelectLocation(locationId) {
        let carsLocation = locations.filter(location => location.id === locationId);
        setLocationSearch(carsLocation[0])
    }

    async function createLocation() {
        if (!formData.name || !formData.city) return;

        await API.graphql({ query: createLocationMutation, variables: { input: formData } }).then((res) => {
            console.log(res)
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

    console.log(locationSearch)

    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} updateObject={updateLocation} createObject={createLocation} setFormData={setFormData} formData={formData} />
            }

            <main id="Content">
                <div className='flex flex-row w-full p-24 gap-12'>
                    <div className="shadow-md sm:rounded-lg bg-gray-700 w-8/12 flex flex-col">
                        <div className='flex justify-between px-6 py-4'>
                            <h1 className='text-white '> Liste des lieux </h1>
                            <button onClick={() => setModal({ ...modal, isShow: true, type: 'add' })} className="bg-amber-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded"> Ajouter un lieu </button>
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
                                        <tr className="bg-gray-700 hover:text-gray-900 transition text-gray-400 font-semibold hover:bg-gray-50">
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
                    {/*
                    <div className='flex flex-col w-4/12'>
                        <div className='bg-gray-700 w-full rounded-lg p-6'>
                            <div className='flex flex-row text-white text-xl justify-between items-center mb-6'>
                                <h1> Liste des voitures par lieu ({locationSearch && locationSearch.cars.items.length})</h1>
                                <select onChange={(e) => onChangeSelectLocation(JSON.parse(e.target.value))} className='w-4/12 bg-gray-200 border-2 border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 pl-2 text-sm' name="locations" id="locations-select">
                                    {locations.map((location) =>
                                        <option value={JSON.stringify(location.id)}>{location.name}</option>
                                    )}
                                </select>
                            </div>
                            {locationSearch && locationSearch.cars.items.map((car, index) => (
                                <div className='p-2 w-full' key={index}>
                                    <span className="bg-green-500 text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> {car.name} </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    */}
                </div>
            </main>

        </>
    )
}