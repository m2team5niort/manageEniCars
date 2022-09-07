import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import Navbar from "./Navbar";
import { API } from 'aws-amplify';
import { listModels } from '../../graphql/queries'
import { createModel as createModelMutation, deleteModel as deleteModelMutation, updateModel as updateModelMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';
import { ChartBarIcon, FlagIcon, KeyIcon, DotsVerticalIcon, CogIcon } from '@heroicons/react/solid'
import ModalValidation from '../Common/Modal/ModalValidation';

const initialFormState = { name: '', description: '' }

export default function Model() {

    const [modalValidation, setModalValidation] = useState({
        isShow: false,
        type: ''
    })
    const [models, setModels] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [modal, setModal] = useState({
        isShow: false,
        type: '',
        page: 'model',
        object: {}
    });

    useEffect(() => {
        fetchModels();
    }, []);

    async function fetchModels() {
        const apiData = await API.graphql({ query: listModels });
        setModels(apiData.data.listModels.items);
    }

    async function createModel() {
        if (!formData.name || !formData.description) return;

        await API.graphql({ query: createModelMutation, variables: { input: formData } }).then((res) => {
            console.log(res)
            setModels([...models, res.data.createModel]);
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false });
            setModalValidation({...modalValidation, isShow: true, type: "Success"}, setTimeout(() => {setModalValidation({...modalValidation, isShow: false})}, "2000"))
        }).catch((err) => {
            console.log(err)
            setModalValidation({...modalValidation, isShow: true, type: "Error"})
        });
    }

    async function updateModel({ id }) {
        formData.id = id

        await API.graphql({ query: updateModelMutation, variables: { input: formData } }).then((res) => {
            let index = models.findIndex((obj => obj.id === id));
            models[index] = res.data.updateModel
            setFormData(initialFormState);
            setModal({ ...modal, isShow: false })
            setModalValidation({...modalValidation, isShow: true, type: "Success"}, setTimeout(() => {setModalValidation({...modalValidation, isShow: false})}, "2000"))
        }).catch((err) => {
            console.log(err)
            setModalValidation({...modalValidation, isShow: true, type: "Error"})
        });

    }

    async function deleteModel({ id }) {
        const newModelsArray = models.filter(model => model.id !== id);
        setModels(newModelsArray);
        await API.graphql({ query: deleteModelMutation, variables: { input: { id } } }).then(() => {
            setModalValidation({...modalValidation, isShow: true, type: "Success"}, setTimeout(() => {setModalValidation({...modalValidation, isShow: false})}, "2000"))
        }).catch((err) => {
            console.log(err)
            setModalValidation({...modalValidation, isShow: true, type: "Error"})
        });
    }

    return (
        <>
            {modal.isShow &&
                <Modal modal={modal} setModal={setModal} updateObject={updateModel} createObject={createModel} setFormData={setFormData} formData={formData} />
            }
            {modalValidation.isShow &&
                <ModalValidation  modalValidation={modalValidation} setModalValidation={setModalValidation}/>
            }

            <main id="Content">
                <div className='px-8'>
                    <div className="shadow-md sm:rounded-lg bg-gray-50">
                        <div className='flex justify-between px-6 py-4'>
                            <h1 className='text-eni'> Liste des modèles </h1>
                            <button onClick={() => setModal({ ...modal, isShow: true, type: 'add' })} className="bg-eni text-white text-lg font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> Ajouter un modèle </button>
                        </div>

                        <table className="w-full text-sm text-left text-dark">
                            <thead className="text-xs text-dark uppercase bg-gray-50">
                                <tr>
                                    <th scope="col-1" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col-4" className="px-6 py-3">
                                        Nom
                                    </th>
                                    <th scope="col-4" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col-2" className="px-6 py-3">
                                        Marque
                                    </th>
                                    <th scope="col-1" className="px-6 py-3 text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    models.map((model, index) => (
                                        <tr className="bg-gray-50 hover:text-gray-900 transition text-dark font-semibold">
                                            <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                                {index + 1}
                                            </th>
                                            <td className="px-6 py-4 whitespace-nowrap font-bold text-eni">
                                                {model.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap font-light text-eni">
                                                {model.description}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="bg-green-500 text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> {model.brand} </span>
                                            </td>
                                            <td className="px-6 py-4 relative text-center">
                                                <MyDropdown object={model} deleteObject={deleteModel} modal={modal} setModal={setModal} listObjects={[]} />
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