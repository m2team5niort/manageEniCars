import { Dialog, Transition } from '@headlessui/react'
import { API } from 'aws-amplify';
import { Fragment, useState, useEffect } from 'react'
import { getTravel } from '/graphql/queries';
import { deleteTravel as deleteTravelMutation, updateTravel as updateTravelMutation } from '/graphql/mutations';
import { FlagIcon, OfficeBuildingIcon, SwitchVerticalIcon, UserCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import BadgeStateTravel from '../../../Common/Badge/BadgeStateTravel';
import Tooltip from '../../../Common/Tooltip/Tooltip';

export default function ModalTravel({modalDisplay, setModalDisplay, idTravel}) {

    let [isOpen, setIsOpen] = useState(true)
    let [travel, setTravel] = useState()

    function closeModal() {
        setIsOpen(false)
        setModalDisplay({...modalDisplay, car: false})
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
        await API.graphql({ query: deleteTravelMutation, variables: { input: { id } } }).then(() => {
            setModalDisplay({...modalDisplay, isRefreshed: true})
                closeModal()
            }
        );
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' })
    }

    return (
        <>
        {travel && travel.travelDepartureId && travel.travelArrivalId ? 
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
                                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-gray-50 p-10 text-left align-middle shadow-2xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-medium leading-6 text-gray-900 mb-8"
                                    >
                                        <div className='flex flex-row justify-between items-center'>
                                            Récapitulatif de mon trajet
                                            <div className='flex flex-row space-x-6 items-center'>
                                                <span className="flex justify-center bg-white text-black text-md font-semi-bold mr-2 px-3 py-0.5 rounded border-x-8 border-blue-500 select-none"> {travel.car.numberPlate} </span>
                                                <BadgeStateTravel state={travel.state}/>
                                            </div>
                                        </div>
                                    </Dialog.Title>
                                    <div className='flex flex-row'>
                                        <div className="flex flex-col justify-between space-y-4 pr-12 border-r-2 border-indigo-300">
                                            <div className='flex flex-row items-center'>
                                                <OfficeBuildingIcon className='w-6 h-6 text-indigo-600 mr-6'/>
                                                <div className='flex flex-col text-xs'>
                                                    <p className='text-lg font-semibold mb-1'>{travel.departure.name},</p>
                                                    <p>{travel.departure.streetNumber},</p>
                                                    <p className='text-gray-700'>{formatDate(travel.dateBegin)}</p>
                                                </div>
                                            </div>
                                            <SwitchVerticalIcon className='w-8 h-8 text-gray-900 mx-auto'/>
                                            <div className='flex flex-row items-center'>
                                                <FlagIcon className='w-6 h-6 text-indigo-600 mr-6'/>
                                                <div className='flex flex-col text-xs'>
                                                    <p className='text-lg font-semibold mb-1'>{travel.arrival.name},</p>
                                                    <p>{travel.arrival.streetNumber},</p>
                                                    <p className='text-gray-700'>{formatDate(travel.dateEnd)}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mx-auto'>
                                            <Image src="/assets/images/dashboard/citroen_c3.png" alt="me" width="384" height="216" />
                                            <div className='flex flex-row justify-between items-center'>
                                                <div className='flex flex-row ml-12'>
                                                    <Tooltip message={'Conducteur: ' + travel.driver.name}>
                                                        <UserCircleIcon className='w-8 h-8 text-indigo-900' />
                                                    </Tooltip>
                                                    <span className='border border-indigo-200 mx-2'></span>
                                                    {travel.passengers ? 
                                                        <>
                                                        {travel.passengers.map(elem => (<Tooltip message={'Passager: ' + elem}><UserCircleIcon key={elem} className='w-8 h-8 text-indigo-600' /></Tooltip>))}
                                                        {[ ...Array(travel.places - travel.passengers.length).keys() ].map((index) => {
                                                            return (
                                                                <Tooltip message='Place libre'>
                                                                    <UserCircleIcon key={index} className='w-8 h-8 text-indigo-200' />
                                                                </Tooltip>
                                                            )
                                                        })}
                                                        </>
                                                    :
                                                        [ ...Array(travel.places).keys() ].map((index) => {
                                                            return (
                                                                <Tooltip message='Place libre'>
                                                                    <UserCircleIcon key={index} className='w-8 h-8 text-indigo-200' />
                                                                </Tooltip>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div>
                                                    <h3 className='text-lg font-semibold'>{travel.model.brand}</h3>
                                                    <p className='text-sm font-light'>{travel.car.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        <button onClick={() => deleteTravel(travel)} className='px-4 py-2 text-sm bg-indigo-800 rounded-md text-white mt-12'>Supprimer</button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            :
            ''
        }
        </>
    )
}