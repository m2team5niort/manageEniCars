import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import { API, graphqlOperation } from 'aws-amplify';
import { listCars, listLocations, listModels, getCar } from '../../graphql/queries'
import { createCar as createCarMutation, deleteCar as deleteCarMutation, updateCar as updateCarMutation } from '../../graphql/mutations';
import { createKey as createKeyMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';

let initialFormState = { name: '', description: '', places: '', carLocationId: "", carModelId: "", locationCarsId: "", modelCarsId: "", numberPlate: "" }

export default function Car() {

    const [locations, setLocations] = useState([])
    const [keys, setKeys] = useState([])
    const [models, setModels] = useState([])
    const [cars, setCars] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [modal, setModal] = useState({
        isShow: false,
        type: '',
        page: 'car',
        object: {},
        listObjects: []
    });

    useEffect(() => {
        fetchCars();
        fetchLocations();
        fetchModels();
    }, []);

    async function fetchCars() {
        await API.graphql({ query: listCars }).then((res) => {
            setCars(res.data.listCars.items) 
        });
    }

    async function fetchLocations() {
        const apiData = await API.graphql(graphqlOperation(listLocations, { filter: { isReferenced: { eq: true } } }))
        setLocations(apiData.data.listLocations.items);
    }

    async function fetchModels() {
        const apiData = await API.graphql({ query: listModels });
        setModels(apiData.data.listModels.items);
    }

    async function createKey(carId, locationId) {
        const formDataKey = { keyCarId: carId, keyLocationId: locationId }
        await API.graphql({ query: createKeyMutation, variables: { input: formDataKey } }).then((res) => {
            setKeys([...keys, res.data.createKey]);
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false });
        }).catch((err) => {
            console.log(err)
        });

    }

    async function createCar() {
        if (!formData.name || !formData.description) return;

        formData.locationCarsId = formData.carLocationId;
        formData.modelCarsId = formData.carModelId;

        await API.graphql({ query: createCarMutation, variables: { input: formData } }).then((res) => {
            createKey(res.data.createCar.id, formData.carLocationId)
            setCars([...cars, res.data.createCar]);
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false });
        }).catch((err) => {
            console.log(err)
        });

    }

    async function updateCar({ id }) {

        formData.id = id

        await API.graphql({ query: updateCarMutation, variables: { input: formData } }).then((res) => {
            let index = cars.findIndex((obj => obj.id === id));
            cars[index] = res.data.updateCar
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false })
        }).catch((err) => {
            console.log(err)
        });

    }

    async function deleteCar({ id }) {
        const newCarsArray = cars.filter(car => car.id !== id);
        setCars(newCarsArray);
        await API.graphql({ query: deleteCarMutation, variables: { input: { id } } });
    }

    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} updateObject={updateCar} createObject={createCar} setFormData={setFormData} formData={formData} />
            }

            <main id='Content'>
                <div className='px-8'>
                    <div className="shadow-md sm:rounded-lg bg-gray-50 overflow-y-auto">
                        <div className='flex justify-between px-6 py-4'>
                            <h1 className='text-dark'> Liste des voitures </h1>
                            <button onClick={() => setModal({ ...modal, isShow: true, type: 'add', listObjects: [locations, models] })} className="bg-blue-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded"> Ajouter une voiture </button>
                        </div>

                        <table className=" w-full text-sm text-left text-dark ">
                            <thead className="text-xs text-dark uppercase bg-transparent">
                                <tr>
                                    <th scope="col-2" className="px-6 py-3">
                                        Nom
                                    </th>
                                    <th scope="col-3" className="px-6 py-3">
                                        Immatriculation
                                    </th>
                                    <th scope="col-2" className="px-6 py-3">
                                        Modèle
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Nb Places
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Localisation
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Disponible
                                    </th>
                                    <th scope="col-1" className="px-6 py-3 text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cars.map((car, index) => (
                                        <tr key={index} className="bg-gray-50 hover:text-gray-900 text-dark font-semibold">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-md font-semi-bold mr-2"> {car.name} </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="flex justify-center bg-white text-black text-md font-semi-bold mr-2 px-3 py-0.5 rounded border-x-8 border-blue-500 shadow-sm"> {car.numberPlate} </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {car.model.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-dark text-md font-semi-bold mr-2"> {car.places} </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="bg-blue-500 text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> {car.location.name} </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded ${car.available ? 'bg-green-500' : 'bg-red-500'}`}>{car.available ? 'Disponible' : 'Non disponible'}</span>
                                            </td>
                                            <td className="px-6 py-4 relative text-center">
                                                <MyDropdown object={car} deleteObject={deleteCar} modal={modal} setModal={setModal} listObjects={[locations, models]} />
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