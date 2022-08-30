import React, {useState, useEffect} from 'react'
import { API } from 'aws-amplify';
import { listTravels, getTravel, getLocation } from '/graphql/queries'
import { FlagIcon, OfficeBuildingIcon, SwitchVerticalIcon, UserCircleIcon, CheckCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image'

export default function Reservation(){

    const [travels, setTravels] = useState([])
    const [destinations, setDestinations] = useState([])

    async function fetchTravels() {
        await API.graphql({ query: listTravels }).then((res => {
            res.data.listTravels.items.forEach(element => {
                API.graphql({ query: getTravel, variables: { id: element.id } }).then((res => {
                    setTravels(travels => [...travels, res.data.getTravel])
                    res.data.getTravel.locations.forEach(element => {
                        API.graphql({ query: getLocation, variables: { id: element } }).then((res => {
                            setDestinations(destinations =>  [...destinations, res.data.getLocation])
                        }))
                    });
                }))
            })
        }))
    }

    useEffect(() => {
        fetchTravels()
    },[])

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' })
    }

    const handleJoinTravel = (travel) => {
        console.log('join it', travel.id)
    }

    console.log(Object.entries(travels))

    return (
        <>
           <h2 className="text-4xl text-indigo-800 font-semibold text-center mb-12">Liste des trajets</h2>
           {travels && destinations.length !== 0 ?
            travels.map(travel => {
                    return(
                        <div className='flex flex-col w-full transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl'>
                            <div key={travel.id} className='flex flex-row'>
                                <div className="flex flex-col space-y-6 justify-between pr-12 border-r-2 border-indigo-300">
                                    {destinations.map((destination, index) => {
                                        return(
                                            <>
                                                <div key={index} className='flex flex-row items-center'>
                                                    {index === 0 ? <OfficeBuildingIcon className='w-6 h-6 text-indigo-600 mr-6'/> : <FlagIcon className='w-6 h-6 text-indigo-600 mr-6'/>}
                                                    <div className='flex flex-col text-xs'>
                                                        <p className='text-lg font-semibold mb-1'>{destination.name},</p>
                                                        <p>{destination.streetNumber},</p>
                                                        <p className='text-gray-700'>{index === 0 ? formatDate(travel.dateBegin) : formatDate(travel.dateEnd)}</p>
                                                    </div>
                                                </div>
                                                {index === 0 ? <SwitchVerticalIcon className='w-8 h-8 text-gray-900 mx-auto'/> : ''}
                                            </>
                                        )
                                    })}
                                </div>
                                <div className='flex flex-row items-center justify-between mx-auto'>
                                    <div className='flex flex-row space-x-6'>
                                        <div className='flex flex-col'>
                                            {[ ...Array(travel.places).keys() ].map((index) => {
                                                return (
                                                    <UserCircleIcon key={index} className='w-8 h-8 text-indigo-200' />
                                                )
                                            })}
                                        </div>
                                        <div>
                                            <h3 className='text-lg font-semibold'>{travel.model.brand}</h3>
                                            <p className='text-sm font-light'>{travel.car.name}</p>
                                        </div>
                                    </div>
                                    <Image src="/assets/images/dashboard/citroen_c3.png" alt="me" width="288" height="162" />
                                    <button onClick={() => handleJoinTravel(travel)} className='px-6 py-2 bg-indigo-800 rounded-md text-white mt-12'>Rejoindre ce trajet</button>
                                </div>
                            </div>
                        </div>
                    )
                })
                :
                ''
            }
        </>
      )
}