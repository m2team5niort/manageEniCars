import React, { useState, useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import Navbar from "./Navbar";
import { API } from 'aws-amplify';
import { listModels } from '../../graphql/queries'
import { createModel as createModelMutation, deleteModel as deleteModelMutation, updateModel as updateModelMutation, detailModel as detailModelMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';

const initialFormState = { name: '', description: '' }

export default function Model({ username }) {

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
            setModal({...modal, isShow: false});
        }).catch((err) => {
            console.log(err)
        });
    }

    async function updateModel({id})
    {
        formData.id = id

        await API.graphql({ query: updateModelMutation, variables: {input: formData}}).then((res) => {
            let index = models.findIndex((obj => obj.id === id));
            models[index] = res.data.updateModel
            setFormData(initialFormState);
            setModal({...modal, isShow: false})
        }).catch((err) => {
            console.log(err)
        });
        
    }

    async function deleteModel({ id }) {
        const newModelsArray = models.filter(model => model.id !== id);
        setModels(newModelsArray);
        await API.graphql({ query: deleteModelMutation, variables: { input: { id } } });
    }

    return (
        <>
            {modal.isShow &&
            <Modal modal={modal} setModal={setModal} updateObject={updateModel} createObject={createModel} setFormData={setFormData} formData={formData} />
        }

            <main>
                <h1 className="text-3xl font-bold">DASHBOARD - <span className="font-normal text-3xl"> Liste des modèles </span></h1>

                <button onClick={() => setModal({...modal, isShow: true, type: 'add'})} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-20">
                    Ajouter un modèle
                </button>
                <div className="App bg-gray-200 mt-2">
                    
                    <div style={{ marginBottom: 30 }}>
                        <div>
                            <div className="flex justify-between bg-gray-400 rounded-md py-2 px-4 text-white font-bold text-md">
                                <div>
                                    <span> Nom </span>
                                </div>
                                <div>
                                    <span> Description </span>
                                </div>
                                <div>
                                    <span> Marque </span>
                                </div>
                                <div>
                                    <span> Image </span>
                                </div>
                                <div>
                                    <span> Actions </span>
                                </div>
                            </div>

                            {
                                models.map(model =>  (

                                    <div key={model.id}>
                                        <div className="flex justify-between border-t text-sm font-normal mt-2 space-x-4">
                                            <div className="px-2 flex">
                                                <span> {model.name} </span>
                                            </div>
                                            <div>
                                                <span> {model.description} </span>
                                            </div>
                                            <div className="px-2">
                                                <span> {model.brand} </span>
                                            </div>
                                            <div className="px-2">
                                                <span> {model.image}</span>
                                            </div>
                                            <div className="px-2 relative">

                                                <MyDropdown object={model} deleteObject={deleteModel} modal={modal} setModal={setModal}/>

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