import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import { API } from 'aws-amplify';
import { listIncidents, getIncident } from '../../graphql/queries'
import { createIncident as createIncidentMutation, deleteUser as deleteIncidentMutation, updateIncident as updateIncidentMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';


let initialFormState = { name: '', criticality: '', date: '', incidentCarId: "", places: '', responsible: '' };


export default function Incident({ user }) {

    const [incidents, setIncidents] = useState([]);
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
    }, []);

    async function fetchIncidents() {
        await API.graphql({ query: listIncidents }).then((res) => {
            console.log(res)
        });
    }

    async function createIncident() {

        await API.graphql({ query: createIncidentMutation, variables: { input: formData } }).then((res) => {
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

    async function deleteIncident({ id }) {
        const newIncidentsArray = incidents.filter(incident => incident.id !== id);
        setUsers(newIncidentsArray);
        await API.graphql({ query: deleteIncidentMutation, variables: { input: { id } } });
    }

    console.log(formData)

    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} updateObject={updateIncident} createObject={createIncident} setFormData={setFormData} formData={formData} />
            }
            <main  id="Content">
                <div className='h-full w-full  p-24'>
                <div className="shadow-md sm:rounded-lg bg-gray-700 ">
                    <div className='flex justify-between px-6 py-4'>
                        <h1 className='text-white '> Liste des incidents </h1>
                        <button onClick={() => setModal({ ...modal, isShow: true, type: 'add' })} className="bg-teal-500 text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded "> Ajouter un incident </button>
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
                                    {
                                        incidents.map((incident, index) => (
                                        <tr key={incident} className="bg-gray-700 hover:text-gray-900 transition text-gray-400 font-semibold hover:bg-gray-50">
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
                                                {incident.car}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {incident.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {incident.responsible}
                                            </td>
                                            <td className="px-6 py-4 relative text-center">
                                            <MyDropdown object={incident} deleteObject={deleteIncident} modal={modal} setModal={setModal} listObjects={[]}/>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                </div>
            </main>



        </>
    )
}