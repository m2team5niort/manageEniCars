import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import { API } from 'aws-amplify';
import { listCars, listLocations, listModels, getCar } from '../../graphql/queries'
import { createCar as createCarMutation, deleteCar as deleteCarMutation, updateCar as updateCarMutation } from '../../graphql/mutations';
import { createKey as createKeyMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';

let initialFormState = { name: '', description: '', places: '', carLocationId: "", carModelId: "", locationCarsId: "", modelCarsId: "" }

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
            res.data.listCars.items.forEach(element => {
                API.graphql({query: getCar, variables: { id: element.id }}).then((res) => {
                    setCars(cars => [...cars, res.data.getCar])
                })
            });
        });
    }

    async function fetchLocations() {
        const apiData = await API.graphql({ query: listLocations });
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
            console.log("ici", err)
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

    console.log(cars)

    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} updateObject={updateCar} createObject={createCar} setFormData={setFormData} formData={formData} />
            }

            <main id="Content">
                <div className='h-full w-full  p-24'>
                    <div className="shadow-md sm:rounded-lg bg-gray-700 overflow-y-auto">
                        <div className='flex justify-between px-6 py-4'>
                            <h1 className='text-white '> Liste des voitures </h1>
                            <button onClick={() => setModal({ ...modal, isShow: true, type: 'add', listObjects: [locations, models] })} className="bg-green-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> Ajouter une voiture </button>
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
                                        <tr key={index} className="bg-gray-700 hover:text-gray-900 transition text-gray-400 font-semibold hover:bg-gray-50">
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
                                                {car.model.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="bg-red-500 text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> {car.places} </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="bg-blue-500 text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> {car.location.name} </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {car.available ? 'Disponbile' : 'Non disponible'}
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