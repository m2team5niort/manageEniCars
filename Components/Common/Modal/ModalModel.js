import React, { useEffect } from 'react';

export default function ModalModel({ setFormData, formData, createModel, setModal, modal, updateModel }) {

    let modalObj = {}

    switch (modal.type) {
        case 'add':
            modalObj = {
                title: 'Ajouter un modèle',
                nameInput: {
                    type: 'text',
                    placeholder: 'Nom du modèle'
                },
                descriptionInput: {
                    type: 'text',
                    placeholder: 'Description du modèle'
                },
                imageInput: {
                    type: 'text',
                    placeholder: 'Image du modèle'
                },
                brandInput: {
                    type: 'text',
                    placeholder: 'Marque du modèle'
                },
                button: function () { return createModel() }
            }
            break;
        case 'update':
            modalObj = {
                title: 'Ajouter un modèle',
                nameInput: {
                    type: 'text',
                    placeholder: 'Nom du modèle'
                },
                descriptionInput: {
                    type: 'text',
                    placeholder: 'Description du modèle'
                },
                imageInput: {
                    type: 'text',
                    placeholder: 'Image du modèle'
                },
                brandInput: {
                    type: 'text',
                    placeholder: 'Marque du modèle'
                },
                button: function () {
                    return updateModel(modal.object)
                }
            }
            break;
        case 'details':
            modalObj = {
                title: 'Ajouter un modèle',
                nameInput: {
                    type: 'text',
                    placeholder: 'Nom du modèle'
                },
                descriptionInput: {
                    type: 'text',
                    placeholder: 'Description du modèle'
                },
                imageInput: {
                    type: 'text',
                    placeholder: 'Image du modèle'
                },
                brandInput: {
                    type: 'text',
                    placeholder: 'Marque du modèle'
                }
            }
            break;


    }

    useEffect(() => {
        if (modal.type === 'update') {
            setFormData({
                ...formData,
                name: modalObj.nameInput.value,
                description: modalObj.descriptionInput.value,
                image: modalObj.imageInput.value,
                brand: modalObj.brandInput.value
            })
        }
    }, [])

    return (

        <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div className="relative w-full h-full max-w-2xl p-4 md:h-auto mx-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {modalObj.title}
                        </h3>
                        <button onClick={() => setModal({ ...modal, isShow: false })} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    <form>
                        <div className='flex flex-col space-y-8 md:w-2/3 mx-auto py-8'>
                            <input
                                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                                placeholder={modalObj.nameInput.placeholder}
                                defaultValue={modalObj.nameInput.value}
                            />
                            <input
                                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                onChange={e => setFormData({ ...formData, 'description': e.target.value })}
                                placeholder={modalObj.descriptionInput.placeholder}
                                defaultValue={modalObj.descriptionInput.value}
                            />
                            <input
                                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                onChange={e => setFormData({ ...formData, 'image': e.target.value })}
                                placeholder={modalObj.imageInput.placeholder}
                                defaultValue={modalObj.imageInput.value}
                            />
                            <input
                                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                onChange={e => setFormData({ ...formData, 'brand': e.target.value })}
                                placeholder={modalObj.brandInput.placeholder}
                                defaultValue={modalObj.brandInput.value}
                            />
                        </div>

                        <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button onClick={() => setModal({ ...modal, isShow: false })} data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Annuler</button>
                            <button onClick={modalObj.button} data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}