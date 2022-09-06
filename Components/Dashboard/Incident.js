import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import { API } from 'aws-amplify';
import { listIncidents, listUsers, listCars, getCar } from '../../graphql/queries'
import { createIncident as createIncidentMutation, deleteIncident as deleteIncidentMutation, updateIncident as updateIncidentMutation, updateCar as updateCarMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';

let initialFormState = { criticality: "", date: "", incidentCarId: "", incidentResponsibleId: "", name: "" };

export default function Incident({ user }) {

    const [incidents, setIncidents] = useState([]);
    const [cars, setCars] = useState([])
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState(initialFormState);
    const [modal, setModal] = useState({
        isShow: false,
        type: '',
        page: 'incident',
        object: {},
        listObjects: []
    });

    useEffect(() => {
        fetchIncidents();
        fetchCars();
        fetchUsers();
    }, []);

    async function fetchIncidents() {
        await API.graphql({ query: listIncidents }).then((res) => {
            setIncidents(res.data.listIncidents.items)
        });
    }

    async function fetchCars() {
        await API.graphql({ query: listCars }).then((res) => {
            setCars(res.data.listCars.items)
        });
    }

    async function fetchUsers() {
        await API.graphql({ query: listUsers }).then((res) => {
            setUsers(res.data.listUsers.items)
        });
    }

    async function createIncident() {

        await API.graphql({ query: createIncidentMutation, variables: { input: formData } }).then((res) => {
            updateCar(formData.incidentCarId, 'add')
            setIncidents([...incidents, res.data.createIncident]);
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false });
        }).catch((err) => {
            console.log(err)
        });

    }

    async function updateIncident({ id }) {
        formData.id = id

        await API.graphql({ query: updateIncidentMutation, variables: { input: formData } }).then((res) => {
            let index = incidents.findIndex((obj => obj.id === id));
            incidents[index] = res.data.updateIncident
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false })
        }).catch((err) => {
            console.log(err)
        });

    }

    async function updateCar(id, state){

        let carObj = await API.graphql({ query: getCar, variables: {id: id}})
        let formDataCar = {id: id, available: false, carModelId: carObj.data.getCar.carModelId}

        state === 'delete' ? formDataCar.available = true : ''

        await API.graphql({ query: updateCarMutation, variables: { input: formDataCar } }).catch((err) => {
            console.log(err)
        });
    }

    async function deleteIncident({ id }) {
        const incident = incidents.filter(incident => incident.id === id)[0];
        const newIncidentsArray = incidents.filter(incident => incident.id !== id);

        await API.graphql({ query: deleteIncidentMutation, variables: { input: { id } } }).then((res) => {
            console.log(res)
            updateCar(incident.incidentCarId, 'delete')
            setIncidents(newIncidentsArray);
        }).catch((err) => console.log(err))
    }

    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} updateObject={updateIncident} createObject={createIncident} setFormData={setFormData} formData={formData} />
            }
            {incidents ? 
            <main  id="Content">
                <div className='px-8'>
                <div className="shadow-md sm:rounded-lg bg-gray-50 ">
                    <div className='flex justify-between px-6 py-4'>
                        <h1 className='text-dark'> Liste des incidents </h1>
                        <button onClick={() => setModal({ ...modal, isShow: true, type: 'add', listObjects: [cars, users] })} className="bg-blue-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded "> Ajouter un incident </button>
                    </div>
                                
                        <table className=" w-full text-sm text-left text-dark">
                            <thead className="text-xs text-dark uppercase bg-gray-50">
                                <tr>
                                    <th scope="col-1" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col-3" className="px-6 py-3">
                                        Nom
                                    </th>
                                    <th scope="col-4" className="px-6 py-3">
                                        Criticité
                                    </th>
                                    <th scope="col-4" className="px-6 py-3">
                                        Voiture
                                    </th>
                                    <th scope="col-1" className="px-6 py-3 text-center">
                                        Date
                                    </th>
                                    <th scope="col-1" className="px-6 py-3 text-center">
                                        Responsable
                                    </th>
                                    <th scope="col-1" className="px-6 py-3 text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {incidents.map((incident, index) => {
                                return(
                                    <tr key={index} className="bg-gray-50 hover:text-gray-900 transition text-dark font-semibold hover:bg-gray-50">
                                        <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                            {index + 1}
                                        </th>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {incident.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="bg-green-500 text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> {incident.criticality} </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {incident.car.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {new Date(incident.date).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {incident.responsible.email}
                                        </td>
                                        <td className="px-6 py-4 relative text-center">
                                            <MyDropdown object={incident} deleteObject={deleteIncident} modal={modal} setModal={setModal} listObjects={[cars,users]}/>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            :
            ''
            }
        </>
    )
}