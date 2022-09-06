import React, { useEffect } from 'react';

export default function ModalIncident({ setFormData, formData, createIncident, updateIncident, setModal, modal }) {

    let modalObj = {}

    switch (modal.type) {
        case 'add':
            modalObj = {
                title: 'Ajouter un incident',
                nameInput: {
                    type: 'text',
                    placeholder: 'Nom de l\'incident'
                },
                criticalityInput: {
                    type: 'text',
                    placeholder: 'Criticité de l\'incident'
                },
                carOption: {
                    value: '--Choisir la voiture associée--'
                },
                dateInput: {
                    type: 'datetime-local',
                    placeholder: 'Date de l\'incident'
                },
                responsibleOption: {
                    value: '--Choisir le responsable associé--'
                },
                button: function () { return createIncident() }
            }
            break;
        case 'update':
            modalObj = {
                title: 'Modifier un incident',
                nameInput: {
                    type: 'text',
                    placeholder: 'Nom de l\'incident',
                    value: modal.object.name
                },
                criticalityInput: {
                    type: 'text',
                    placeholder: 'Criticité de l\'incident',
                    value: modal.object.criticality
                },
                carOption: {
                    value: modal.object.car.name,
                },
                dateInput: {
                    type: 'text',
                    placeholder: 'Date de l\'incident',
                    value: modal.object.date
                },
                responsibleOption: {
                    value: modal.object.responsible.email,
                },
                button: function () {
                    return updateIncident(modal.object)
                }
            }
            break;
        case 'details':
            modalObj = {
                title: 'Détails d\'un incident',
                nameInput: {
                    type: 'text',
                    placeholder: 'Nom de l\'utiliasteur',
                    value: modal.object.name,
                    readOnly: 'readOnly',
                },
                criticalityInput: {
                    type: 'text',
                    placeholder: 'Criticité de l\'incident',
                    value: modal.object.criticality,
                    readOnly: 'readOnly',
                },
                carOption: {
                    value: modal.object.car.name,
                    disabled: 'disabled',
                },
                dateInput: {
                    type: 'text',
                    placeholder: 'Date de l\'incident',
                    value: modal.object.date,
                    readOnly: 'readOnly',
                },
                responsibleOption: {
                    value: modal.object.responsible.email,
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
                criticality: modalObj.criticalityInput.value,
                incidentCarId: modalObj.carOption.value,
                date: modalObj.dateInput.value,
                incidentResponsibleId: modalObj.responsibleOption.value
            })
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full mt-12">
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
                            <input
                                className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                                placeholder={modalObj.nameInput.placeholder}
                                defaultValue={modalObj.nameInput.value}
                                readOnly={modalObj.nameInput.readOnly}
                            />
                            <input
                                className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                onChange={e => setFormData({ ...formData, criticality: e.target.value })}
                                placeholder={modalObj.criticalityInput.placeholder}
                                defaultValue={modalObj.criticalityInput.value}
                                readOnly={modalObj.criticalityInput.readOnly}
                            />
                            <select onChange={(e) => setFormData({ ...formData, incidentCarId: JSON.parse(e.target.value) })} className='bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' name="locations" id="locations-select">
                                <option selected="true" disabled="disabled">{modalObj.carOption.value}</option>
                                {modal.listObjects[0].map((car) =>
                                    <option disabled={modalObj.carOption.disabled} value={JSON.stringify(car.id)}>{car.name}</option>
                                )}
                            </select>
                            <input 
                                className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ${modalObj.className}`}
                                onChange={e => setFormData({...formData, date: new Date(e.target.value).toISOString() })}
                                placeholder={modalObj.dateInput.placeholder}
                                defaultValue={modalObj.dateInput.value}
                                readOnly={modalObj.dateInput.readOnly}
                                type={modalObj.dateInput.type}
                            />
                            <select onChange={(e) => setFormData({ ...formData, incidentResponsibleId: JSON.parse(e.target.value) })} className='bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' name="locations" id="locations-select">
                                <option selected="true" disabled="disabled">{modalObj.responsibleOption.value}</option>
                                {modal.listObjects[1].map((user) =>
                                    <option disabled={modalObj.responsibleOption.disabled} value={JSON.stringify(user.id)}>{user.email}</option>
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