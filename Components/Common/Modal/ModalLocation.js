import React, { useEffect, useState } from 'react';

export default function ModalLocation({ setFormData, formData, createLocation, setModal, modal, updateLocation }) {

    let modalObj = {}
    const [adresses, setAdresses] = useState({
        objects: [],
        isShow: ''
    })
    const [adressSelect, setAdressSelect] = useState(false)

    switch (modal.type) {
        case 'add':
            modalObj = {
                title: 'Ajouter un lieu',
                nameInput: {
                    type: 'text',
                    placeholder: 'Nom du lieu',
                },
                streetNumberInput: {
                    type: 'adress',
                    placeholder: 'Numéro et nom de rue',
                },
                cityInput: {
                    type: 'text',
                    placeholder: 'Nom de la ville',
                },
                departementInput: {
                    type: 'text',
                    placeholder: 'Département',
                },
                zipInput: {
                    type: 'number',
                    placeholder: 'Code postal',
                },
                longitudeInput: {
                    type: 'text',
                    placeholder: 'Longitude',
                    readOnly: 'readOnly',
                },
                latitudeInput: {
                    type: 'text',
                    placeholder: 'Latitude',
                    readOnly: 'readOnly',
                },
                button: function () { return createLocation() }
            }
            break;
        case 'update':
            modalObj = {
                title: 'Modifier un lieu',
                nameInput: {
                    type: 'text',
                    placeholder: 'Nom du lieu',
                },
                streetNumberInput: {
                    type: 'adress',
                    placeholder: 'Numéro et nom de rue',
                },
                cityInput: {
                    type: 'text',
                    placeholder: 'Nom de la ville',
                },
                departementInput: {
                    type: 'text',
                    placeholder: 'Département',
                },
                zipInput: {
                    type: 'number',
                    placeholder: 'Code postal',
                },
                longitudeInput: {
                    type: 'text',
                    placeholder: 'Longitude',
                    readOnly: 'readOnly',
                },
                latitudeInput: {
                    type: 'text',
                    placeholder: 'Latitude',
                    readOnly: 'readOnly'
                },
                button: function () {
                    return updateLocation(modal.object)
                }
            }
            break;
        case 'details':
            modalObj = {
                title: 'Visualisation du lieu',
                nameInput: {
                    type: 'text',
                    placeholder: 'Nom du lieu',
                    value: modal.object.name,
                    readOnly: 'readOnly'
                },
                streetNumberInput: {
                    type: 'adress',
                    placeholder: 'Numéro et nom de rue',
                    value: modal.object.streetNumber,
                    readOnly: 'readOnly'
                },
                cityInput: {
                    type: 'text',
                    placeholder: 'Nom de la ville',
                    value: modal.object.city,
                    readOnly: 'readOnly'
                },
                departementInput: {
                    type: 'text',
                    placeholder: 'Département',
                    value: modal.object.departement,
                    readOnly: 'readOnly'
                },
                zipInput: {
                    type: 'number',
                    placeholder: 'Code postal',
                    value: modal.object.zip,
                    readOnly: 'readOnly'
                },
                longitudeInput: {
                    type: 'text',
                    placeholder: 'Longitude',
                    value: modal.object.longitude,
                    readOnly: 'readOnly'
                },
                latitudeInput: {
                    type: 'text',
                    placeholder: 'Latitude',
                    value: modal.object.latitude,
                    readOnly: 'readOnly'
                },
                className: 'cursor-not-allowed'
            }
            break;


    }

    useEffect(() => {
        // Set adressSelect and unshow autocomplete adresse , then init data input with modal.object
        if (modal.type === 'update') {
            setAdressSelect(true)
            setAdresses({ ...adresses, objects: [], isShow: false })
            setFormData({
                ...formData,
                name: modal.object.name,
                streetNumber: modal.object.streetNumber,
                city: modal.object.city,
                zip: modal.object.zip,
                departement: modal.object.departement,
                longitude: modal.object.longitude,
                latitude: modal.object.latitude,
            })
        }
    }, [])

    useEffect(() => {
        // If adress is not selected, and if streetnumber is not null, then , search for adress with api gouv
        if (!adressSelect.isSelect) {
            if (formData.streetNumber !== '') {
                getAdressModal()
            } else if (adressSelect) {
                setAdresses({ ...adresses, objects: [], isShow: false })
            }
        }
    }, [formData.streetNumber])

    // This function call the function getAdress() and return an array of adresses by search ing in formData.streetNumber.
    // When response comes, the function setAdresses() to objects data and to set modal isShow to true, to display the selected adresses
    const getAdressModal = async () => {

        const response = await fetch('http://localhost:3000/api/dashboard/getAdress/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                adress: formData.streetNumber,
            })

        })

        const data = await response.json()
        setAdresses({ ...adresses, objects: data, isShow: true })

    }

    // When user click on select adresses, he choose one of them, so we destruct adress object to setFormData input value
    function handleAdressChange(adress) {

        if (adress !== '') {
            setAdresses({ ...adresses, objects: [], isShow: false })
            setFormData({
                ...formData,
                city: adress.properties.city,
                departement: adress.properties.context.split(',')[1].replace(' ', ''),
                zip: adress.properties.postcode,
                streetNumber: adress.properties.label,
                longitude: adress.geometry.coordinates[0],
                latitude: adress.geometry.coordinates[1]
            })
            setAdressSelect(true)
        }
    }

    console.log(formData)

    return (

        <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full ">
            <div className="relative w-full h-full max-w-2xl p-4 md:h-auto mx-auto">
                <div className="relative bg-white rounded-lg shadow ">
                    <div className="flex items-start justify-between p-4 rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900 ">
                            {modalObj.title}
                        </h3>
                        <button onClick={() => setModal({ ...modal, isShow: false })} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    <form>
                        <div className='flex flex-col md:w-2/3 mx-auto py-8'>
                            <label>Nom du lieu</label>
                            <input
                                className={`mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                                placeholder={modalObj.nameInput.placeholder}
                                value={formData.name ? formData.name : modalObj.nameInput.value}
                                readOnly={modalObj.nameInput.readOnly}
                            />

                            <div className="relative">
                                <label>Numéro et nom de rue</label>
                                <input
                                    className={`mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                    onChange={e => setFormData({ ...formData, 'streetNumber': e.target.value }, setAdressSelect(false))}
                                    placeholder={modalObj.streetNumberInput.placeholder}
                                    value={formData.streetNumber ? formData.streetNumber : modalObj.streetNumberInput.value}
                                    readOnly={modalObj.streetNumberInput.readOnly}
                                />

                                {adresses.isShow && !adressSelect ?

                                    <ul className="-mt-6 mb-6 bg-gray-100 p-4 absolute w-full">
                                        {adresses.objects.map(adress => (
                                            <li onClick={() => handleAdressChange(adress)} className="hover:bg-gray-200 p-2 transition cursor-pointer">{adress.properties.label}</li>
                                        ))}
                                    </ul>

                                    :
                                    <></>

                                }
                            </div>

                            <>
                                <label>Ville</label>
                                <input
                                    className={`mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                    onChange={e => setFormData({ ...formData, 'city': e.target.value })}
                                    placeholder={modalObj.cityInput.placeholder}
                                    value={formData.city ? formData.city : modalObj.cityInput.value}
                                    readOnly={modalObj.cityInput.readOnly}
                                />
                                <div className='flex flex-row gap-4'>
                                    <div className='flex flex-col'>
                                        <label>Département</label>
                                        <input
                                            className={`mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                            onChange={e => setFormData({ ...formData, 'departement': e.target.value })}
                                            placeholder={modalObj.departementInput.placeholder}
                                            value={formData.departement ? formData.departement : modalObj.departementInput.value}
                                            readOnly={modalObj.departementInput.readOnly}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label>Code postal</label>
                                        <input
                                            className={`mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                            onChange={e => setFormData({ ...formData, 'zip': e.target.value })}
                                            placeholder={modalObj.zipInput.placeholder}
                                            value={formData.zip ? formData.zip : modalObj.zipInput.value}
                                            readOnly={modalObj.zipInput.readOnly}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-row gap-4'>
                                    <div className='flex flex-col'>
                                        <label>Longitude</label>
                                        <input
                                            className={`mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 cursor-not-allowed`}
                                            onChange={e => setFormData({ ...formData, 'longitude': e.target.value })}
                                            placeholder={modalObj.longitudeInput.placeholder}
                                            value={formData.longitude ? formData.longitude : modalObj.longitudeInput.value}
                                            readOnly={modalObj.longitudeInput.readOnly}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label>Latitude</label>
                                        <input
                                            className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 cursor-not-allowed`}
                                            onChange={e => setFormData({ ...formData, 'latitude': e.target.value })}
                                            placeholder={modalObj.latitudeInput.placeholder}
                                            value={formData.latitude ? formData.latitude : modalObj.latitudeInput.value}
                                            readOnly={modalObj.latitudeInput.readOnly}
                                        />
                                    </div>
                                </div>
                            </>
                        </div>

                        <div className="flex items-center justify-center p-6 space-x-2 rounded-b">
                            <button onClick={() => setModal({ ...modal, isShow: false })} data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Annuler</button>
                            {modal.type !== "details" &&
                                <button onClick={modalObj.button} data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Ajouter</button>
                            }
                        </div>
                    </form>
                </div>
            </div >
        </div >


    )
}