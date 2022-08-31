import React, {useState, useEffect} from 'react'
import { API } from 'aws-amplify';
import { listTravels, getTravel, getLocation } from '/graphql/queries'
import { FlagIcon, OfficeBuildingIcon, SwitchVerticalIcon, UserCircleIcon, CheckCircleIcon, WifiIcon } from '@heroicons/react/solid';
import Image from 'next/image'

export default function Reservation(){

    const [travels, setTravels] = useState([])

    async function fetchTravels() {
        await API.graphql({ query: listTravels }).then((res => {
            res.data.listTravels.items.forEach(element => {
                API.graphql({ query: getTravel, variables: { id: element.id } }).then((res => {
                    setTravels(travels => [...travels, res.data.getTravel])
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

    console.log(travels)

    return (
        <>
            <h2 className="text-4xl text-indigo-800 font-semibold text-center mb-12">Liste des trajets</h2>
            <div className='flex flex-col space-y-12'>
                {travels ?
                travels.map(travel => {
                        return(
                            <div className='flex flex-col w-full transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl'>
                                <div key={travel.id} className='flex flex-row justify-between'>
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
                                    <div className='flex flex-col justify-center'>
                                        <div className='flex flex-row items-center'>
                                            <Image src="/assets/images/dashboard/citroen_c3.png" alt="me" width="288" height="162" />
                                            <div className='flex flex-row space-x-4'>
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
                                        </div>
                                        <button onClick={() => handleJoinTravel(travel)} className='px-6 py-2 bg-indigo-800 rounded-md text-white mt-4 w-full'>Rejoindre ce trajet</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div style={{height: '288px'}} className='flex flex-col w-full transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl'>
                        <div className='flex flex-row w-full justify-around items-center'>
                            <div className='flex flex-col space-y-14 justify-between w-4/12'>
                                <div className='w-full bg-gray-100 animate-pulse h-20'></div>
                                <div className='w-full bg-gray-100 animate-pulse h-20'></div>
                            </div>
                            <div className='w-6/12 bg-gray-100 animate-pulse h-40'></div>
                        </div>
                    </div>
                }
            </div>
        </>
      )
}