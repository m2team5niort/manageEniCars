import React, {useState, useEffect} from 'react'
import { API } from 'aws-amplify';
import { listTravels } from '../../../graphql/queries';
import ModalTravel from './Modals/ModalTravel';
import { TruckIcon, UserCircleIcon } from '@heroicons/react/solid';
import BadgeStateTravel from '../../Common/Badge/BadgeStateTravel';

export default function ListTravels({newTravel}){

    const [travels, setTravels] = useState([])
    const [modalDisplay, setModalDisplay] = useState({
        isDisplayed: false,
        travelId: '',
        isRefreshed: false
    })

    useEffect(() => {
        fetchTravels();
    }, [newTravel, modalDisplay.isRefreshed]);

    
    async function fetchTravels() {
        await API.graphql({ query: listTravels }).then((res => {
            setTravels(res.data.listTravels.items)
        }));
    }

    console.log(modalDisplay)

    return(
        <>
            {travels &&
                <>
                   <h2 className="text-4xl text-blue-800 font-semibold text-center">Liste de mes trajets à venir</h2>
                    {travels.map((travel => {
                            return (
                                <div key={travel.id} onClick={() => setModalDisplay({...modalDisplay, isDisplayed: !modalDisplay.isDisplayed, travelId: travel.id, isRefreshed: false})} className='flex flex-row items-center justify-between bg-white shadow-md hover:shadow-xl ease-in duration-200 p-8 rounded-md cursor-pointer space-x-6 w-10/12 mx-auto'>
                                    <TruckIcon className='w-10 h-10 bg-blue-800 text-white p-2 rounded-full'/>
                                    <div className='flex flex-col'>
                                        <p className='text-xs'>Du: {new Date(travel.dateBegin).toLocaleString()}</p>
                                        <p className='text-xs'>Au: {new Date(travel.dateEnd).toLocaleString()}</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <UserCircleIcon className='w-8 h-8 text-blue-900' />
                                        <span className='border border-indigo-200 mx-2'></span>
                                        {travel.passengers ? 
                                            <>
                                            {travel.passengers.map((index) => (<UserCircleIcon key={index} className='w-8 h-8 text-blue-600' />))}
                                            {[ ...Array(travel.places - travel.passengers.length - 1).keys() ].map((index) => {
                                                return (
                                                    <UserCircleIcon key={index} className='w-8 h-8 text-blue-200' />
                                                )
                                            })}
                                            </>
                                        :
                                            [ ...Array(travel.places - 1).keys() ].map((index) => {
                                                return (
                                                    <UserCircleIcon key={index} className='w-8 h-8 text-blue-200' />
                                                )
                                            })
                                        }
                                    </div>
                                    <BadgeStateTravel state={travel.state}/>
                                </div>
                            )
                        }
                    ))}
                    { modalDisplay.isDisplayed && 
                        <ModalTravel modalDisplay={modalDisplay} setModalDisplay={setModalDisplay} idTravel={modalDisplay.travelId} /> 
                    }
                </>
            }        
        </>
    )
}