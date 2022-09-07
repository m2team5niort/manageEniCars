import React, { useEffect } from 'react';

export default function ModalReservation({ setFormData, formData, createTravel, updateTravel, setModal, modal }){

    let modalObj = {}

    switch (modal.type) {
        case 'add':
            modalObj = {
                title: 'Ajouter une réservation',
                driverOption: {
                    value: '--Choisir le conducteur associé--'
                },
                carOption: {
                    value: '--Choisir la voiture associée--'
                },
                dateBeginInput: {
                    type: 'datetime-local',
                    placeholder: 'Date de départ'
                },
                dateEndInput: {
                    type: 'datetime-local',
                    placeholder: 'Date d\'arrivée'
                },
                placesInput: {
                    type: 'number',
                    placeholder: 'Nombre de places',
                    max: "5",
                    min: "0",
                    step: "1"
                },
                departureOption: {
                    value: '--Choisir le lieu de départ associé--'
                },
                arrivalOption: {
                    value: '--Choisir le lieu d\'arrivé associé--'
                },
                button: function () { return createTravel() }
            }
            break;
        case 'update':
            modalObj = {
                title: 'Modifier une réservation',
                driverOption: {
                    value: modal.object.driver.name,
                },
                carOption: {
                    value: modal.object.car.name,
                },
                dateBeginInput: {
                    type: 'datetime-local',
                    placeholder: 'Date de départ',
                    value: new Date(modal.object.dateBegin).toISOString().slice(0,16)
                },
                dateEndInput: {
                    type: 'datetime-local',
                    placeholder: 'Date d\'arrivée',
                    value: new Date(modal.object.dateEnd).toISOString().slice(0,16)
                },
                placesInput: {
                    type: 'number',
                    placeholder: 'Nombre de places',
                    value: modal.object.places,
                    max: 5,
                    min: 0,
                    step: 1
                },
                departureOption: {
                    value: modal.object.departure.name,
                },
                arrivalOption: {
                    value: modal.object.arrival.name,
                },
                button: function () {
                    return updateTravel(modal.object)
                }
            }
            break;
        case 'details':
            modalObj = {
                title: 'Détails d\'une reservation',
                driverOption: {
                    value: modal.object.driver.name,
                    disabled: 'disabled',
                },
                carOption: {
                    value: modal.object.car.name,
                    disabled: 'disabled',
                },
                dateBeginInput: {
                    type: 'datetime-local',
                    placeholder: 'Date de départ',
                    value: new Date(modal.object.dateBegin).toISOString().slice(0,16),
                    readOnly: 'readOnly',
                },
                dateEndInput: {
                    type: 'datetime-local',
                    placeholder: 'Date d\'arrivée',
                    value: new Date(modal.object.dateEnd).toISOString().slice(0,16),
                    readOnly: 'readOnly',
                },
                placesInput: {
                    type: 'number',
                    placeholder: 'Nombre de places',
                    value: modal.object.places,
                    readOnly: 'readOnly',
                },
                departureOption: {
                    value: modal.object.departure.name,
                    disabled: 'disabled',
                },
                arrivalOption: {
                    value: modal.object.arrival.name,
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
                travelDriverId: modal.object.travelDriverId,
                travelCarId: modal.object.travelCarId,
                dateBegin: modal.object.dateBegin,
                dateEnd: modal.object.dateEnd,
                travelDepartureId: modal.object.travelDepartureId,
                travelArrivalId: modal.object.travelArrivalId,
                travelModelId: modal.object.travelModelId,
            })
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
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
                        <div className='flex flex-col space-y-8 md:w-2/3 mx-auto py-8'>
                            <select onChange={(e) => setFormData({ ...formData, travelDriverId: JSON.parse(e.target.value) })} className='bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' name="cars" id="cars-select">
                                <option selected="true" disabled="disabled">{modalObj.driverOption.value}</option>
                                {modal.listObjects[0].map((user) => {
                                        return(
                                            <option key={user.id} disabled={modalObj.driverOption.disabled} value={JSON.stringify(user.id)}>{user.name}</option>
                                        )
                                    }
                                )}
                            </select>
                            <select onChange={(e) => setFormData({ ...formData, travelCarId: JSON.parse(e.target.value) })} className='bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' name="cars" id="cars-select">
                                <option selected="true" disabled="disabled">{modalObj.carOption.value}</option>
                                {modal.listObjects[1].map((car) => {
                                        return(
                                            <option key={car.id} disabled={modalObj.carOption.disabled} value={JSON.stringify(car)}>{car.name}</option>
                                        )
                                    }
                                )}
                            </select>
                            <input 
                                className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                onChange={e => setFormData({...formData, dateBegin: new Date(e.target.value).toISOString() })}
                                placeholder={modalObj.dateBeginInput.placeholder}
                                defaultValue={modalObj.dateBeginInput.value}
                                readOnly={modalObj.dateBeginInput.readOnly}
                                type={modalObj.dateBeginInput.type}
                            />
                            <input 
                                className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                onChange={e => setFormData({...formData, dateEnd: new Date(e.target.value).toISOString() })}
                                placeholder={modalObj.dateEndInput.placeholder}
                                defaultValue={modalObj.dateEndInput.value}
                                readOnly={modalObj.dateEndInput.readOnly}
                                type={modalObj.dateEndInput.type}
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
                            <select onChange={(e) => setFormData({ ...formData, travelDepartureId: JSON.parse(e.target.value) })} className='bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' name="cars" id="cars-select">
                                <option selected="true" disabled="disabled">{modalObj.departureOption.value}</option>
                                {modal.listObjects[2].map((location) => {
                                        return(
                                            <option key={location.id} disabled={modalObj.departureOption.disabled} value={JSON.stringify(location.id)}>{location.name}</option>
                                        )
                                    }
                                )}
                            </select>
                            <select onChange={(e) => setFormData({ ...formData, travelArrivalId: JSON.parse(e.target.value) })} className='bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' name="cars" id="cars-select">
                                <option selected="true" disabled="disabled">{modalObj.arrivalOption.value}</option>
                                {modal.listObjects[2].map((location) => {
                                        return(
                                            <option key={location.id} disabled={modalObj.arrivalOption.disabled} value={JSON.stringify(location.id)}>{location.name}</option>
                                        )
                                    }
                                )}
                            </select>
                        </div>
                        <div className="flex items-center justify-center p-6 space-x-2 rounded-b">
                            <button onClick={() => setModal({ ...modal, isShow: false })} data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Annuler</button>
                            {modal.type !== "details" &&
                                <button onClick={modalObj.button} data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ajouter</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}