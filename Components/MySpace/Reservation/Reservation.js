import React, {useState, useEffect} from 'react'
import { API } from 'aws-amplify';
import { listTravels } from '/graphql/queries'
import { updateTravel as updateTravelMutation } from '../../../graphql/mutations';
import { FlagIcon, OfficeBuildingIcon, SwitchVerticalIcon, UserCircleIcon, CheckCircleIcon, WifiIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import Tooltip from '../../Common/Tooltip/Tooltip';

export default function Reservation({user}){

    console.log(user)

    const [travels, setTravels] = useState([])

    async function fetchTravels() {
        await API.graphql({ query: listTravels }).then((res => {
            setTravels(res.data.listTravels.items)
        }))
    }

    useEffect(() => {
        fetchTravels()
    },[])

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' })
    }

    const handleJoinTravel = async (travel) => {
        const state = updateTravel(travel)
    }

    async function updateTravel(travel, userId = null){

        let travelDuplication = {...travel}
        if(travelDuplication.passengers === null){
            travelDuplication.passengers = []
        }

        if(!userId){
            travelDuplication.passengers.push(user.id)
        }else{
            console.log(travelDuplication.passengers)
            let index = travelDuplication.passengers.findIndex( (user) => user === userId );
            travelDuplication.passengers.splice(index, 1);
            console.log(travelDuplication.passengers)
        }

        travelDuplication.travelDriverId = travel.driver.id
        travelDuplication.travelCarId = travel.car.id
        travelDuplication.travelModelId = travel.model.id
        travelDuplication.travelDepartureId = travel.departure.id
        travelDuplication.travelArrivalId = travel.arrival.id

        delete travelDuplication.driver;
        delete travelDuplication.car;
        delete travelDuplication.model;
        delete travelDuplication.departure;
        delete travelDuplication.arrival;
        delete travelDuplication.createdAt;
        delete travelDuplication.updatedAt;

        await API.graphql({ query: updateTravelMutation, variables: { input: travelDuplication } }).then(() => {
            fetchTravels()
        }).catch((err) => {
            console.log(err)
        });

    } 

    const handleStateButtonJoinTravel = (travel) => {
        let result;
        if(travel.passengers){
            if(travel.passengers.includes(user.id)){
                result = <button onClick={() => updateTravel(travel, user.id)} className='px-6 py-2 bg-red-500 rounded-md text-sm text-white mt-4 w-6/12 mx-auto hover:bg-red-600 transition duration-150 ease-in'>Quitter le trajet</button>
            }
            else if(travel.passengers.length === travel.places){
                result = <button className='px-6 py-2 bg-gray-500 rounded-md text-sm text-white mt-4 w-6/12 mx-auto cursor-not-allowed'>Trajet plein</button>
            }
            else{
                result = <button onClick={() => handleJoinTravel(travel)} className='px-6 py-2 bg-indigo-800 rounded-md text-sm text-white mt-4 w-6/12 mx-auto hover:bg-indigo-600 transition duration-150 ease-in'>Rejoindre ce trajet</button>
            }   
        }else{
            result = <button onClick={() => handleJoinTravel(travel)} className='px-6 py-2 bg-indigo-800 rounded-md text-sm text-white mt-4 w-6/12 mx-auto hover:bg-indigo-600 transition duration-150 ease-in'>Rejoindre ce trajet</button>
        }

        return result
    }

    console.log(travels)

    return (
        <>
            <h2 className="text-4xl text-indigo-800 font-semibold text-center mb-12">Liste des trajets</h2>
            <div className='flex flex-col space-y-12'>
                {travels ?
                travels.map(travel => {
                        return(
                            <div key={travel.id} className='flex flex-col w-full transform overflow-hidden rounded-2xl bg-white p-8 shadow-xl'>
                                <div className='flex flex-row justify-between'>
                                    <div className="flex flex-col justify-between space-y-4 pr-12 border-r-2 border-indigo-300 w-5/12">
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
                                    <div className='flex flex-col justify-center w-7/12'>
                                        <div className='flex flex-row items-center justify-between mr-2'>
                                            <div className='flex flex-col'>
                                                <Image src="/assets/images/dashboard/citroen_c3.png" alt="me" width="288" height="162" />
                                                <div className='flex flex-row ml-12'>
                                                    <Tooltip message={'Conducteur: ' + travel.driver.name}>
                                                        <UserCircleIcon className='w-8 h-8 text-indigo-600' />
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
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className="flex justify-center bg-white text-black text-md font-semi-bold mr-2 px-3 py-0.5 rounded border-x-8 border-blue-500 select-none shadow-sm"> {travel.car.numberPlate} </span>
                                                <h3 className='text-lg font-semibold'>{travel.model.brand},</h3>
                                                <p className='text-sm font-light'>{travel.car.name}</p>
                                            </div>
                                        </div>
                                        {handleStateButtonJoinTravel(travel)}
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