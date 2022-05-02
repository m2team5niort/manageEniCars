import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import Navbar from "./Navbar";
import { API } from 'aws-amplify';
import { listCars } from '../../graphql/queries'
import { createCar as createCarMutation, deleteCar as deleteCarMutation, updateCar as updateCarMutation, detailCar as detailCarMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';

let initialFormState = { name: '', description: '', modele: '', places: '' }

export default function Car({ username }) {

    const [cars, setCars] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [modal, setModal] = useState({
        isShow: false,
        type: '',
        page: 'car',
        object: {}
    });

    useEffect(() => {
        fetchCars();
    }, []);

    console.log(cars)

    async function fetchCars() {
        const apiData = await API.graphql({ query: listCars });
        setCars(apiData.data.listCars.items);
    }

    async function createCar() {
        if (!formData.name || !formData.description) return;

        await API.graphql({ query: createCarMutation, variables: { input: formData } }).then((res) => {
            console.log(res)
            setCars([...cars, res.data.createCar]);
            setFormData(initialFormState);
            setModal({...modal, isShow: false});
        }).catch((err) => {
            console.log(err)
        });

    }

    async function updateCar({id})
    {
        console.log(id)

        formData.id = id

        await API.graphql({ query: updateCarMutation, variables: {input: formData}}).then((res) => {
            let index = cars.findIndex((obj => obj.id === id));
            cars[index] = res.data.updateCar
            setFormData(initialFormState);
            setModal({...modal, isShow: false})
        }).catch((err) => {
            console.log(err)
        });
        
    }

    async function deleteCar({id}) {
        const newCarsArray = cars.filter(car => car.id !== id);
        setCars(newCarsArray);
        await API.graphql({ query: deleteCarMutation, variables: { input: { id } }});
    }

    console.log(cars)

    return (
        <>
        {modal.isShow &&
            <Modal modal={modal} setModal={setModal} updateCar={updateCar} createCar={createCar} setFormData={setFormData} formData={formData} />
        }

            <main>
                <h1 className="text-3xl font-bold">DASHBOARD - <span className="font-normal text-3xl"> Liste des voitures </span></h1>

                <button onClick={() => setModal({...modal, isShow: true, type: 'add'})} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-20">
                    Ajouter une voiture
                </button>
                <div className="App bg-gray-200 mt-2">
                    
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
                                cars.map(car =>  (

                                    <div key={car.id}>
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

                                                <MyDropdown object={car} deleteObject={deleteCar} modal={modal} setModal={setModal}/>

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