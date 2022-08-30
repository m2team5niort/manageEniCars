import { Dialog, Transition } from '@headlessui/react'
import { API } from 'aws-amplify';
import { Fragment, useState, useEffect } from 'react'
import { getTravel, getLocation } from '/graphql/queries';
import { deleteTravel as deleteTravelMutation, updateTravel as updateTravelMutation } from '/graphql/mutations';
import { FlagIcon, OfficeBuildingIcon, SwitchVerticalIcon, UserCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image'

export default function ModalTravel({modalHandler, setModalHandler, idTravel}) {

    let [isOpen, setIsOpen] = useState(true)
    let [travel, setTravel] = useState()
    let [destinations, setDestinations] = useState([])

    function closeModal() {
        setIsOpen(false)
        setModalHandler({...modalHandler, isDisplayed: false})
    }

    useEffect(() => {
        fetchTravel(idTravel)
    },[])

    async function fetchTravel(idTravel){
        await API.graphql({ query: getTravel, variables: { id: idTravel } }).then((res => {
            setTravel(res.data.getTravel)
            res.data.getTravel.locations.forEach(element => {
                API.graphql({ query: getLocation, variables: { id: element } }).then((res => {
                    setDestinations(destinations => [...destinations, res.data.getLocation])
                }))
            });
        }));
    }

    async function deleteTravel({ id }) {
        await API.graphql({ query: deleteTravelMutation, variables: { input: { id } } }).then(() => {
                setModalHandler({...modalHandler, isRefreshed: true})
                closeModal()
            }
        );
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' })
    }

    console.log(travel, destinations)

    return (
        <>
        {travel && destinations.length !== 0 ? 
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
                                        Récapitulatif de mon trajet
                                    </Dialog.Title>
                                    <div className='flex flex-row'>
                                        <div className="flex flex-col justify-between space-y-8 pr-12 border-r-2 border-indigo-300">
                                            {destinations.map((elem, index) => {
                                                return(
                                                    <>
                                                        <div className='flex flex-row items-center'>
                                                            {index === 0 ? <OfficeBuildingIcon className='w-6 h-6 text-indigo-600 mr-6'/> : <FlagIcon className='w-6 h-6 text-indigo-600 mr-6'/>}
                                                            <div className='flex flex-col text-xs'>
                                                                <p className='text-lg font-semibold mb-1'>{elem.name},</p>
                                                                <p>{elem.streetNumber},</p>
                                                                <p className='text-gray-700'>{formatDate(travel.dateBegin)}</p>
                                                            </div>
                                                        </div>
                                                        {index === 0 ? <SwitchVerticalIcon className='w-8 h-8 text-gray-900 mx-auto'/> : ''}
                                                    </>
                                                )
                                            })}
                                        </div>
                                        <div className='mx-auto'>
                                            <Image src="/assets/images/dashboard/citroen_c3.png" alt="me" width="384" height="216" />
                                            <div className='flex flex-row justify-between items-center'>
                                                <div className='ml-12'>
                                                    <h3 className='text-lg font-semibold'>{travel.model.brand}</h3>
                                                    <p className='text-sm font-light'>{travel.car.name}</p>
                                                </div>
                                                <div className='flex flex-row'>
                                                    {[ ...Array(travel.places).keys() ].map((index) => {
                                                        return (
                                                                <UserCircleIcon key={index} className='w-8 h-8 text-indigo-200' />
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        <button onClick={() => deleteTravel(travel)} className='px-6 py-2 bg-indigo-800 rounded-md text-white mt-12'>Supprimer</button>
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

export async function getServerSideProps({ req, res }) {
    
  
    return {
      props: {}
    }
  
  }