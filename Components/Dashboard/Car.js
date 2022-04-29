import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import Navbar from "./Navbar";
import { API } from 'aws-amplify';
import { listCars } from '../../graphql/queries'
import { createCar as createCarMutation, deleteCar as deleteCarMutation, updateCar as updateCarMutation, detailCar as detailCarMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';

export default function Car({ username }) {

    const [cars, setCars] = useState([]);
    const [formData, setFormData] = useState({ name: '', description: '', modele: '', places: '' });
    const [modal, setModal] = useState({
        isShow: false,
        type: '',
        page: 'car',
        object: {}
    });
    const [onDelete, setOnDelete] = useState();
    const [onUpdate, setOnUpdate] = useState();

    useEffect(() => {
        fetchCars();
    }, []);

    useEffect(() => {
        deleteCar(onDelete);
    }, [onDelete]);

    useEffect(() => {
        console.log(onUpdate)
        updateCar(onUpdate);
    }, [cars]);

    async function fetchCars() {
        const apiData = await API.graphql({ query: listCars });
        setCars(apiData.data.listCars.items);
    }

    async function createCar() {
        if (!formData.name || !formData.description) return;
        let query = await API.graphql({ query: createCarMutation, variables: { input: formData } });
        setCars([...cars, formData]);
        setFormData(initialFormState);
        
        if(query.data.createCar)
        {
            setModal({...modal, isShow: false});
        }
    }

    async function updateCar(id)
    {
        // console.log("formData: ", formData)

        // const updated = await API.graphql({ query: updateCarMutation, variables: {input: formData}});
        // console.log("updated", updated)
        // setCars([...cars, formData]);
        // setFormData(initialFormState);
        
    }

    async function deleteCar() {
        const newCarsArray = cars.filter(car => car.id !== id);
        setCars(newCarsArray);
        await API.graphql({ query: deleteCarMutation, variables: { input: { id } }});
    }



    return (
        <>
        {/* {modal.isShow &&
            <Modal setModal={setModal} updateCar={updateCar} createCar={createCar} setFormData={setFormData} formData={formData} modal={modal} />
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

                                                <MyDropdown id={car.id} car={car} onDelete={setOnDelete} modal={modal} setModal={setModal}/>

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
            </div> */}


        </>
    )
}