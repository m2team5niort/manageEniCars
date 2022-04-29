import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import { API } from 'aws-amplify';
import { listCars } from '../../graphql/queries'
import { createCar as createCarMutation, deleteCar as deleteCarMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';

const initialFormState = { name: '', description: '' }

export default function Car({ username }) {

    const [cars, setCars] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [modal, setModal] = useState(false);

    console.log(modal)

    useEffect(() => {
        fetchCars();
    }, []);

    async function fetchCars() {
        const apiData = await API.graphql({ query: listCars });
        setCars(apiData.data.listCars.items);
    }

    async function createCar() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createCarMutation, variables: { input: formData } });
        setCars([...cars, formData]);
        setFormData(initialFormState);
    }

    async function deleteCar({ id }) {
        const newCarsArray = cars.filter(car => car.id !== id);
        setCars(newCarsArray);
        await API.graphql({ query: deleteCarMutation, variables: { input: { id } } });
    }

    return (
        <>
            {modal &&
                <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full ">
                    <div className="relative w-full h-full max-w-2xl p-4 md:h-auto mx-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <h1>My Cars App</h1>
                    <input
                        onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                        placeholder="Car name"
                        value={formData.name}
                    />
                    <input
                        onChange={e => setFormData({ ...formData, 'description': e.target.value })}
                        placeholder="Car description"
                        value={formData.description}
                    />
                    <input
                        onChange={e => setFormData({ ...formData, 'modele': e.target.value })}
                        placeholder="Car modele"
                        value={formData.modele}
                    />
                    <input
                        onChange={e => setFormData({ ...formData, 'places': e.target.value })}
                        placeholder="Car places"
                        value={formData.places}
                    />
                    
                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button onClick={createCar} data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Car</button>
                                <button onClick={() => setModal(false)} data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <main>
                <h1 className="text-3xl font-bold">DASHBOARD - <span className="font-normal text-3xl"> Liste des voitures </span></h1>

                <button onClick={() => setModal(true)} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-20">
                    Ajouter une voiture
                </button>
                <div className="App bg-gray-200 mt-2">
                    {/*  */}

                    <div style={{ marginBottom: 30 }}>
                        <div>
                            <div className="flex justify-between bg-gray-400 rounded-md py-2 px-4 text-white font-bold text-md">
                                <div>
                                    <span>Nom</span>
                                </div>
                                <div>
                                    <span>Description</span>
                                </div>
                                <div>
                                    <span>Modèle</span>
                                </div>
                                <div>
                                    <span> Nb Places</span>
                                </div>
                                <div>
                                    <span> Actions </span>
                                </div>
                            </div>

                            {
                                cars.map(car => (

                                    <div>
                                        <div className="flex justify-between border-t text-sm font-normal mt-2 space-x-4">
                                            <div className="px-2 flex">
                                                <span> {car.name} </span>
                                            </div>
                                            <div>
                                                <span> {car.description} </span>
                                            </div>
                                            <div className="px-2">
                                                <span> {car.modele} </span>
                                            </div>
                                            <div className="px-2">
                                                <span> {car.places}</span>
                                            </div>
                                            <div className="px-2 relative">
                                        
                                                <MyDropdown />                                                
                                                
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