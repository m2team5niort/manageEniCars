import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import Navbar from "./Navbar";
import { API } from 'aws-amplify';
import { listLocations } from '../../graphql/queries'
import { createLocation as createLocationMutation, deleteLocation as deleteLocationMutation, updateLocation as updateLocationMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';

const initialFormState = { name: '', city: '', departement: '', zip: '', streetNumber: '', longitude: '', latitude: '' }

export default function Location({ username }) {

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
        console.log('coucou')
        if (!formData.name || !formData.city) return;

        console.log('coucou')

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

    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} updateObject={updateLocation} createObject={createLocation} setFormData={setFormData} formData={formData} />
            }

            <main>
                <h1 className="text-3xl font-bold">DASHBOARD - <span className="font-normal text-3xl"> Liste des lieux </span></h1>

                <button onClick={() => setModal({ ...modal, isShow: true, type: 'add' })} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-20">
                    Ajouter un lieu
                </button>
                <div className="App bg-gray-200 mt-2">

                    <div style={{ marginBottom: 30 }}>
                        <div>
                            <div className="flex justify-between bg-gray-400 rounded-md py-2 px-4 text-white font-bold text-md">
                                <div>
                                    <span> Nom </span>
                                </div>
                                <div>
                                    <span> Ville </span>
                                </div>
                                <div>
                                    <span> Département </span>
                                </div>
                                <div>
                                    <span> Code postal </span>
                                </div>
                                <div>
                                    <span> Numéro de rue </span>
                                </div>
                                <div>
                                    <span> Longitude </span>
                                </div>
                                <div>
                                    <span> Latitude </span>
                                </div>
                                <div>
                                    <span> Action </span>
                                </div>
                            </div>

                            {
                                locations.map(location => (

                                    <div key={location.id}>
                                        <div className="flex justify-between border-t text-sm font-normal mt-2 space-x-4">
                                            <div className="px-2 flex">
                                                <span> {location.name} </span>
                                            </div>
                                            <div>
                                                <span> {location.city} </span>
                                            </div>
                                            <div className="px-2">
                                                <span> {location.departement} </span>
                                            </div>
                                            <div className="px-2">
                                                <span> {location.zip}</span>
                                            </div>
                                            <div className="px-2">
                                                <span> {location.streetNumber}</span>
                                            </div>
                                            <div className="px-2">
                                                <span> {location.longitude}</span>
                                            </div>
                                            <div className="px-2">
                                                <span> {location.latitude}</span>
                                            </div>
                                            <div className="px-2 relative">

                                                <MyDropdown object={location} deleteObject={deleteLocation} modal={modal} setModal={setModal} />

                                            </div>
                                        </div>

                                    </div>

                                ))
                            }


                        </div>
                    </div>
                </div>
            </main>

            <div className="right-section">
                <Navbar username={username} />
            </div>



        </>
    )
}