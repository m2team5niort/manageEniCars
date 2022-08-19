import { Dialog, Transition } from '@headlessui/react'
import { API } from 'aws-amplify';
import { Fragment, useState, useEffect } from 'react'
import { getTravel } from '/graphql/queries';
import { deleteTravel as deleteTravelMutation, updateTravel as updateTravelMutation } from '/graphql/mutations';
import { SwitchVerticalIcon, FlagIcon, OfficeBuildingIcon } from '@heroicons/react/solid';

export default function ModalTravel({modalDisplay, setModalDisplay, idTravel}) {

    let [isOpen, setIsOpen] = useState(true)
    let [travel, setTravel] = useState({})

    function closeModal() {
        setIsOpen(false)
        setModalDisplay({...modalDisplay, isDisplayed: false})
    }

    useEffect(() => {
        fetchTravel(idTravel)
    },[])

    async function fetchTravel(idTravel){
        await API.graphql({ query: getTravel, variables: { id: idTravel } }).then((res => {
            setTravel(res.data.getTravel)
        }));
    }

    async function deleteTravel({ id }) {
        await API.graphql({ query: deleteTravelMutation, variables: { input: { id } } });
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' })
    }

    console.log(travel)

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gray-50 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-medium leading-6 text-gray-900 mb-6"
                                    >
                                        Récapitulatif de mon trajet
                                    </Dialog.Title>
                                    <div className="flex flex-col mt-6 space-y-8">
                                        <div className='flex flex-row'>
                                            <OfficeBuildingIcon className='w-8 h-8 text-indigo-600 mr-6'/>
                                            <div className='flex flex-col text-xs'>
                                                <p className='text-lg font-semibold mb-1'>Eni Nantes,</p>
                                                <p>3 Rue Michael Faraday,</p>
                                                <p>44800 Saint-Herblain</p>
                                                <p className='text-gray-700'>{formatDate(travel.dateBegin)}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-row'>
                                            <FlagIcon className='w-8 h-8 text-indigo-600 mr-6'/>
                                            <div className='flex flex-col text-xs'>
                                                <p className='text-lg font-semibold mb-1'>Eni Rennes,</p>
                                                <p>8 Rue Léo Lagrange,</p>
                                                <p>35131 Chartres-de-Bretagne</p>
                                                <p className='text-gray-700'>{formatDate(travel.dateEnd)}</p>
                                            </div>
                                        </div>
                                    </div>
                                        {/*<button onClick={() => deleteTravel(travel)} className='px-6 py-2 bg-indigo-800 rounded-md text-white mt-12'>Supprimer</button>*/}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
