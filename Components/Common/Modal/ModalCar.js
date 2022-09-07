import React, { useEffect, useState } from 'react';

export default function ModalCar({ setFormData, formData, createCar, updateCar, setModal, modal }) {

    let modalObj = {}

    switch (modal.type) {
        case 'add':
            modalObj = {
                title: 'Ajouter une voiture',
                nameInput: {
                    type: 'text',
                    placeholder: 'Nom de la voiture'
                },
                numberPlateInput: {
                    type: 'text',
                    placeholder: 'XX-XXX-XX'
                },
                descriptionInput: {
                    type: 'text',
                    placeholder: 'Description de la voiture'
                },
                placesInput: {
                    type: 'number',
                    placeholder: 'Nombre de places dans la voiture',
                    value: modal.object.places,
                    max: 5,
                    min: 0,
                    step: 1
                },
                modelOption: {
                    value: '--Choisir le model associé--'
                },
                locationOption: {
                    value: '--Choisir le lieu associé--'
                },
                imageInput: {
                    type: 'file',
                },
                button: function () { return createCar() }
            }
            break;
        case 'update':
            modalObj = {
                title: 'Modifier une voiture',
                nameInput: {
                    type: 'text',
                    placeholder: 'Nom de la voiture',
                    value: modal.object.name
                },
                numberPlateInput: {
                    type: 'text',
                    placeholder: 'XX-XXX-XX',
                    value: modal.object.numberPlate
                },
                descriptionInput: {
                    type: 'text',
                    placeholder: 'Description de la voiture',
                    value: modal.object.description
                },
                placesInput: {
                    type: 'number',
                    placeholder: 'Nombre de places',
                    value: modal.object.places,
                    max: 5,
                    min: 0,
                    step: 1
                },
                modelOption: {
                    value: modal.object.model.name,
                },
                locationOption: {
                    value: modal.object.location.name,
                },
                imageInput: {
                    type: 'file',
                },
                button: function () {
                    return updateCar(modal.object)
                }
            }
            break;
        case 'details':
            modalObj = {
                title: 'Détails d\'une voiture',
                nameInput: {
                    type: 'text',
                    placeholder: 'Nom de la voiture',
                    value: modal.object.name,
                    readOnly: 'readOnly',
                },
                numberPlateInput: {
                    type: 'text',
                    placeholder: 'XX-XXX-XX',
                    value: modal.object.numberPlate,
                    readOnly: 'readOnly',
                },
                descriptionInput: {
                    type: 'text',
                    placeholder: 'Description de la voiture',
                    value: modal.object.description,
                    readOnly: 'readOnly',
                },
                placesInput: {
                    type: 'number',
                    placeholder: 'Nombre de places',
                    value: modal.object.places,
                    readOnly: 'readOnly',
                },
                modelOption: {
                    value: modal.object.model.name,
                    disabled: 'disabled',
                },
                locationOption: {
                    value: modal.object.location.name,
                    disabled: 'disabled',
                },
                className: 'cursor-not-allowed'
            }
            break;


    }

    useEffect(() => {
        if (modal.type === 'update') {
            setFormData({
                ...formData,
                name: modalObj.nameInput.value,
                numberPlate: modalObj.numberPlateInput.value,
                description: modalObj.descriptionInput.value,
                places: modalObj.placesInput.value,
                carLocationId: modal.object.location.id,
                carModelId: modal.object.model.id,
                locationCarsId: modal.object.location.id,
                modelCarsId: modal.object.model.id,
                image: modal.object.image
            })
        }
    }, [])

    const handleNumberPlate = (e, numberPlateOld) => {
        let numberPlate = e.target.value.toUpperCase()

        let oldNumberPlateLength = numberPlateOld.length
        let newNumberPlateLength = numberPlate.length

        if(newNumberPlateLength > oldNumberPlateLength){
            if(numberPlate.length === 2){
                numberPlate += '-'
            }
            if(numberPlate.length === 6){
                numberPlate += '-'
            }
        }else{
            if(numberPlate.length === 3){
                numberPlate = numberPlate.slice(0, -1);
            }
            if(numberPlate.length === 7){
                numberPlate = numberPlate.slice(0, -1);
            }
        }

        setFormData({ ...formData, 'numberPlate': numberPlate })
    }

    const onImageChange = ({target: {validity, files: [file]}}) => validity.valid && setFormData({...formData, image: file});

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div className="relative w-full h-full max-w-2xl p-4 md:h-auto mx-auto">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-start justify-between p-4 rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            {modalObj.title}
                        </h3>
                        <button onClick={() => setModal({ ...modal, isShow: false })} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>

                    <form>
                        <div className='flex flex-col space-y-6 md:w-2/3 mx-auto py-8'>
                            <input
                                className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                                placeholder={modalObj.nameInput.placeholder}
                                defaultValue={modalObj.nameInput.value}
                                readOnly={modalObj.nameInput.readOnly}
                            />
                            <input
                                maxLength={9}
                                className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                onChange={e => handleNumberPlate(e, formData.numberPlate)}
                                placeholder={modalObj.numberPlateInput.placeholder}
                                value={modal.type === 'details' ? modalObj.numberPlateInput.value : formData.numberPlate}
                                defaultValue={modalObj.numberPlateInput.value}
                                readOnly={modalObj.numberPlateInput.readOnly}
                            />
                            <input
                                className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                onChange={e => setFormData({ ...formData, 'description': e.target.value })}
                                placeholder={modalObj.descriptionInput.placeholder}
                                defaultValue={modalObj.descriptionInput.value}
                                readOnly={modalObj.descriptionInput.readOnly}
                            />
                            <input 
                                className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                onChange={e => setFormData({...formData, places: e.target.value })}
                                min={modalObj.placesInput.min}
                                max={modalObj.placesInput.max}
                                step={modalObj.placesInput.step}
                                placeholder={modalObj.placesInput.placeholder}
                                defaultValue={modalObj.placesInput.value}
                                readOnly={modalObj.placesInput.readOnly}
                                type={modalObj.placesInput.type}
                            />
                            <select onChange={(e) => setFormData({ ...formData, carModelId: JSON.parse(e.target.value) })} className='bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' name="locations" id="locations-select">
                                <option selected="true" disabled="disabled">{modalObj.modelOption.value}</option>
                                {modal.listObjects[1].map((model) =>
                                    <option disabled={modalObj.modelOption.disabled} value={JSON.stringify(model.id)}>{model.name}</option>
                                )}
                            </select>
                            <select onChange={(e) => setFormData({ ...formData, carLocationId: JSON.parse(e.target.value) })} className='bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' name="locations" id="locations-select">
                                <option selected="true" disabled="disabled">{modalObj.locationOption.value}</option>
                                {modal.listObjects[0].map((location) =>
                                    <option disabled={modalObj.locationOption.disabled} value={JSON.stringify(location.id)}>{location.name}</option>
                                )}
                            </select>
                            {modal.type === 'details' ? <img className='object-fit w-80 mx-auto rounded-lg' src={modal.object.image} /> : <input type={modalObj.imageInput.type} name="postImage" accept="image/*" onChange={onImageChange} />}
                            
                        </div>

                        <div className="flex items-center justify-center pb-6 space-x-2 rounded-b">
                            <button onClick={() => setModal({ ...modal, isShow: false })} data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Annuler</button>
                            {modal.type !== "details" && formData.image === '' ? '' : 
                                <button onClick={modalObj.button} data-modal-toggle="defaultModal" type="button" className={`text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${formData.image === '' ? 'cursor-not-allowed' : ''}`}>Ajouter</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

