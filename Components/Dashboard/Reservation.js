import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import { API, graphqlOperation } from 'aws-amplify';
import { listCars, listLocations, listTravels, listUsers } from '../../graphql/queries'
import { createTravel as createTravelMutation, updateTravel as updateTravelMutation, deleteTravel as deleteTravelMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';
import ModalValidation from '../Common/Modal/ModalValidation';


let initialFormState = {state: "En attente", travelArrivalId: "", travelDepartureId: "", dateBegin: "", dateEnd: "", places: 0, travelCarId: "", travelDriverId: "", travelModelId: "", passengers: []}

export default function Reservation() {

    const [modalValidation, setModalValidation] = useState({
        isShow: false,
        type: ''
    })
    const [travels, setTravels] = useState([]);
    const [users, setUsers] = useState([]);
    const [cars, setCars] = useState([]);
    const [locations, setLocations] = useState([]);
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
        setLocations(apiData.data.listLocations.items);
    }

    async function createTravel() {

        formData.travelModelId = formData.travelCarId.carModelId;
        formData.travelCarId = formData.travelCarId.id;

        if ((!formData.state || !formData.travelArrivalId || !formData.travelDepartureId || !formData.dateBegin || !formData.dateEnd || !formData.places || !formData.travelCarId || !formData.travelDriverId) && (formData.travelArrivalId !== formData.travelDepartureId)) return;

        await API.graphql({ query: createTravelMutation, variables: { input: formData } }).then((res) => {
            setTravels([...travels, res.data.createTravel])
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false });
            setModalValidation({...modalValidation, isShow: true, type: "Success"}, setTimeout(() => {setModalValidation({...modalValidation, isShow: false})}, "2000"))
        }).catch((err) => {
            console.log(err)
            setModalValidation({...modalValidation, isShow: true, type: "Error"})
        });

    }

    async function updateTravel({ id }) {
        formData.id = id

        await API.graphql({ query: updateTravelMutation, variables: { input: formData } }).then((res) => {
            let index = travels.findIndex((obj => obj.id === id));
            travels[index] = res.data.updateTravel
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false })
            setModalValidation({...modalValidation, isShow: true, type: "Success"}, setTimeout(() => {setModalValidation({...modalValidation, isShow: false})}, "2000"))
        }).catch((err) => {
            console.log(err)
            setModalValidation({...modalValidation, isShow: true, type: "Error"})
        });

    }

    async function deleteTravel({ id }) {
        const newTravelsArray = travels.filter(travel => travel.id !== id);
        setTravels(newTravelsArray);
        await API.graphql({ query: deleteTravelMutation, variables: { input: { id } } }).then(() => {
            setModalValidation({...modalValidation, isShow: true, type: "Success"}, setTimeout(() => {setModalValidation({...modalValidation, isShow: false})}, "2000"))
        }).catch((err) => {
            console.log(err)
            setModalValidation({...modalValidation, isShow: true, type: "Error"})
        });
    }

    console.log(travels, formData)

    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} updateObject={updateTravel} createObject={createTravel} setFormData={setFormData} formData={formData} />
            }
            {modalValidation.isShow &&
                <ModalValidation  modalValidation={modalValidation} setModalValidation={setModalValidation}/>
            }
            <main id="Content">
                <div className='px-8 w-full'>
                    <div className="shadow-md bg-gray-50 rounded-lg">
                        <div className='flex justify-between px-6 py-4'>
                            <h1 className='text-dark'> Liste des réservation </h1>
                            <button onClick={() => setModal({ ...modal, isShow: true, type: 'add', listObjects: [users, cars, locations] })} className="bg-blue-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded"> Ajouter une réservation </button>
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
                            {travels.map((travel,index) => {
                                return(
                                    <tr key={travel.id} className="bg-gray-50 hover:text-gray-900 transition text-dark font-semibold">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {index+1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {travel.driver.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {travel.car.name}
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
                                )
                            })
                            }
                            </tbody>
                        </table>
                     </div>
                </div>
            </main>



        </>
    )
}