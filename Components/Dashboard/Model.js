import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import { API } from 'aws-amplify';
import { listModels } from '../../graphql/queries'
import { createModel as createModelMutation, deleteModel as deleteModelMutation } from '../../graphql/mutations';
import MyDropdown from './Dropdown';

const initialFormState = { name: '', description: '' }

export default function Model({ username }) {

    const [models, setModels] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [modal, setModal] = useState(false);

    console.log(modal)

    useEffect(() => {
        fetchModels();
    }, []);

    async function fetchModels() {
        const apiData = await API.graphql({ query: listModels });
        setModels(apiData.data.listModels.items);
    }

    async function createModel() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createModelMutation, variables: { input: formData } });
        setModels([...models, formData]);
        setFormData(initialFormState);
    }

    async function deleteModel({ id }) {
        const newModelsArray = models.filter(model => model.id !== id);
        setModels(newModelsArray);
        await API.graphql({ query: deleteModelMutation, variables: { input: { id } } });
    }

    return (
        <>
            {modal &&
                <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                    <div className="relative w-full h-full max-w-2xl p-4 md:h-auto mx-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Ajouter un modèle
                                </h3>
                                <button onClick={() => setModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            
                            <form>
                                <div className='flex flex-col space-y-8 md:w-2/3 mx-auto py-8'>
                                        <input
                                            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                            onChange={e => setFormData({ ...formData, 'name': e.target.value})}
                                            placeholder="Nom du modèle"
                                            value={formData.name}
                                        />
                                        <input
                                            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                            onChange={e => setFormData({ ...formData, 'description': e.target.value})}
                                            placeholder="Description du modèle"
                                            value={formData.description}
                                        />
                                        <input
                                            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                            onChange={e => setFormData({ ...formData, 'image': e.target.value})}
                                            placeholder="Image du modèle"
                                            value={formData.image}
                                        />
                                        <input
                                            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                            onChange={e => setFormData({ ...formData, 'brand': e.target.value})}
                                            placeholder="Marque du modèle"
                                            value={formData.brand}
                                        />
                                </div>

                                <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={() => setModal(false)} data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Annuler</button>
                                    <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajouter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }

            <main>
                <h1 className="text-3xl font-bold">DASHBOARD - <span className="font-normal text-3xl"> Liste des modèles </span></h1>

                <button onClick={() => setModal(true)} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-20">
                    Ajouter un modèle
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
                                    <span>Marque</span>
                                </div>
                                <div>
                                    <span>Image</span>
                                </div>
                                <div>
                                    <span> Actions </span>
                                </div>
                            </div>

                            {
                                models.map(model => (

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
                                        
                                                <MyDropdown />                                                
                                                
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