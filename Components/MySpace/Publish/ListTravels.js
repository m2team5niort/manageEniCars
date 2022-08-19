import React, {useState, useEffect} from 'react'
import { API } from 'aws-amplify';
import { listTravels } from '../../../graphql/queries';
import ModalTravel from './Modals/ModalTravel';
import { TruckIcon, UserCircleIcon } from '@heroicons/react/solid';

export default function ListTravels({travel}){

    const [travels, setTravels] = useState([])
    const [modalDisplay, setModalDisplay] = useState({
        isDisplayed: false,
        travelId: ''
    })

    useEffect(() => {
        fetchTravels();
    }, [travel]);

    
    async function fetchTravels() {
        await API.graphql({ query: listTravels }).then((res => {
            setTravels(res.data.listTravels.items)
        }));
    }

    const nbrPlaces = (places) => {
        [ ...Array(places).keys() ].map(() => {
            return (
                <div>
                    <UserCircleIcon className='w-8 h-8' />
                </div>
            )
        })
    }

    return(
        <>
            {travels &&
                <>
                   <h2 className="text-4xl text-indigo-800 font-semibold text-center">Liste de mes trajets à venir</h2>
                    {travels.map((travel => {
                            return (
                                <div onClick={() => setModalDisplay({...modalDisplay, isDisplayed: !modalDisplay.isDisplayed, travelId: travel.id})} className='flex flex-row items-center bg-gray-50 shadow-md hover:bg-white ease-in duration-200 p-8 rounded-md cursor-pointer space-x-6 w-6/12 mx-auto'>
                                    <TruckIcon className='w-10 h-10 bg-indigo-800 text-white p-2 rounded-full'/>
                                    <div className='flex flex-col'>
                                        <p className='text-xs'>Du: {new Date(travel.dateBegin).toLocaleString()}</p>
                                        <p className='text-xs'>Au: {new Date(travel.dateEnd).toLocaleString()}</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        {[ ...Array(travel.places).keys() ].map(() => {
                                            return (
                                                    <UserCircleIcon className='w-8 h-8 text-indigo-200' />
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        }
                    ))}
                    { modalDisplay.isDisplayed && <ModalTravel modalDisplay={modalDisplay} setModalDisplay={setModalDisplay} idTravel={modalDisplay.travelId} /> }
                </>
            }        
        </>
    )
}