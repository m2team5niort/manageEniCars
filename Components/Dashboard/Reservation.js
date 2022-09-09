import React, { useState, useEffect, Fragment } from 'react';
import Modal from '../Common/Modal/Modal';
import { API, graphqlOperation } from 'aws-amplify';
import { listCars, listLocations, listTravels, listUsers } from '../../graphql/queries'
import { createTravel as createTravelMutation, updateTravel as updateTravelMutation, deleteTravel as deleteTravelMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

let initialFormState = {state: "En attente", travelArrivalId: "", travelDepartureId: "", dateBegin: "", dateEnd: "", places: 0, travelCarId: "", travelDriverId: "", travelModelId: "", passengers: []}

export default function Reservation() {

    const [travels, setTravels] = useState([]);
    const [users, setUsers] = useState([]);
    const [cars, setCars] = useState([]);
    const [locations, setLocations] = useState([]);
    const [selected, setSelected] = useState();
    const [locationTravels, setLocationTravels] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [modal, setModal] = useState({
        isShow: false,
        type: '',
        page: 'reservation',
        object: {},
        listObjects: []
    });

    useEffect(() => {
        fetchTravels();
        fetchUsers();
        fetchCars();
        fetchLocations();
    }, []);

    async function fetchTravels() {
        await API.graphql({ query: listTravels }).then((res) => {
            setTravels(res.data.listTravels.items)
        });
    }

    async function fetchUsers() {
        await API.graphql({ query: listUsers }).then((res) => {
            setUsers(res.data.listUsers.items)
        });
    }

    async function fetchCars() {
        await API.graphql({ query: listCars }).then((res) => {
            setCars(res.data.listCars.items)
        });
    }

    async function fetchLocations() {
        const apiData = await API.graphql(graphqlOperation(listLocations, { filter: { isReferenced: { eq: true } } }))
        let location = apiData.data.listLocations.items[0]
        setLocations(apiData.data.listLocations.items);
        setSelected(location);
        fetchLocationTravels(location);
    }

    async function createTravel() {

        formData.travelModelId = formData.travelCarId.carModelId;
        formData.travelCarId = formData.travelCarId.id;

        if ((!formData.state || !formData.travelArrivalId || !formData.travelDepartureId || !formData.dateBegin || !formData.dateEnd || !formData.places || !formData.travelCarId || !formData.travelDriverId) && (formData.travelArrivalId !== formData.travelDepartureId)) return;

        await API.graphql({ query: createTravelMutation, variables: { input: formData } }).then((res) => {
            setTravels([...travels, res.data.createTravel])
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false });
        }).catch((err) => {
            console.log(err)
        });

    }

    async function updateTravel({ id }) {
        formData.id = id

        await API.graphql({ query: updateTravelMutation, variables: { input: formData } }).then((res) => {
            let index = travels.findIndex((obj => obj.id === id));
            travels[index] = res.data.updateTravel
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false })
        }).catch((err) => {
            console.log(err)
        });

    }

    async function deleteTravel({ id }) {
        const newTravelsArray = travels.filter(travel => travel.id !== id);
        setTravels(newTravelsArray);
        await API.graphql({ query: deleteTravelMutation, variables: { input: { id } } });
    }

    async function fetchLocationTravels({ name }){
        await API.graphql({ query: listTravels }).then((res) => {
            let travels = res.data.listTravels.items;
            const filteredLocationTravels = travels.filter(travel => travel.departure.name === name);
            setLocationTravels(filteredLocationTravels)
        })
    }

    async function handleSelected(location){
        setSelected(location)
        fetchLocationTravels(location)
    }

    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} updateObject={updateTravel} createObject={createTravel} setFormData={setFormData} formData={formData} />
            }
            {selected &&
            <main id="Content">
                <div className='px-8 w-full'>
                    <div className="shadow-md bg-gray-50 rounded-lg">
                        <div className='flex justify-between px-6 py-4'>
                            <h1 className='text-dark'> Liste des réservation </h1>
                            <div className='flex items-center space-x-4'>
                                <div className="w-72">
                                    <Listbox value={selected} onChange={(e) => handleSelected(e)}>
                                        <div className="relative mt-1">
                                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            <span className="block truncate">{selected.name}</span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <SelectorIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {locations.map(location => (
                                                <Listbox.Option
                                                key={location.id}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active ? 'bg-blue-100 text-dark' : 'text-gray-900'
                                                    }`
                                                }
                                                value={location}
                                                >
                                                {({ selected }) => (
                                                    <>
                                                    <span
                                                        className={`block truncate ${
                                                        selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                    >
                                                        {location.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                    </>
                                                )}
                                                </Listbox.Option>
                                            ))}
                                            </Listbox.Options>
                                        </Transition>
                                        </div>
                                    </Listbox>
                                </div>
                                <button onClick={() => setModal({ ...modal, isShow: true, type: 'add', listObjects: [users, cars, locations] })} className="bg-blue-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded"> Ajouter une réservation </button>
                            </div>
                        </div>       
                        <table className="text-sm text-left text-dark dark:text-gray-400 bg-gray-50">
                            <thead className="text-xs text-dark uppercase">
                                <tr>
                                    <th scope="col-1" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Conducteur
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Voiture
                                    </th>
                                    <th scope="col-2" className="px-6 py-3">
                                        Horaires
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Nb Places
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Lieu de départ
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Lieu d'arrivée
                                    </th>
                                    <th scope="col-1" className="px-6 py-3">
                                        Nb de passagers
                                    </th>
                                    <th scope="col-1" className="px-6 py-3 text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {locationTravels.length > 0 ?
                                locationTravels.map((travel,index) => {
                                    return (
                                        <tr key={travel.id} className="bg-gray-50 hover:text-gray-900 transition text-dark font-semibold">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {index+1}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {travel.driver && travel.driver.name ? travel.driver.name  : ''}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {travel.car && travel.car.name ? travel.car.name  : ''}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap flex flex-col">
                                                <span>{new Date(travel.dateBegin).toLocaleString()}</span>
                                                <span>{new Date(travel.dateEnd).toLocaleString()}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {travel.places}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {travel.departure.city}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {travel.arrival.city}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {travel.passengers.length}
                                            </td>
                                            <td className="px-6 py-4 relative text-center">
                                                <MyDropdown object={travel} deleteObject={deleteTravel} modal={modal} setModal={setModal} listObjects={[users, cars, locations]} />
                                            </td>
                                        </tr>
                                    );
                                })
                                :
                                <tr className="bg-gray-50 hover:text-gray-900 transition text-dark font-semibold">
                                    <td className="text-md pb-4 w-full text-center">
                                        Aucun résultat lié à votre filtre
                                    </td>
                                </tr>
                            }
                            </tbody>
                        </table>
                     </div>
                </div>
            </main>
            }



        </>
    )
}