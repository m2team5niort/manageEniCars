import React, {useState, useEffect} from 'react'
import { API } from 'aws-amplify';
import { listTravels } from '../../../graphql/queries';
import ModalTravel from './Modals/ModalTravel';
import { TruckIcon, UserCircleIcon } from '@heroicons/react/solid';

export default function ListTravels({newTravel}){

    const [travels, setTravels] = useState([])
    const [modalHandler, setModalHandler] = useState({
        isDisplayed: false,
        travelId: '',
        isRefreshed: false
    })

    useEffect(() => {
        fetchTravels();
    }, [newTravel, modalHandler.isRefreshed]);

    
    async function fetchTravels() {
        await API.graphql({ query: listTravels }).then((res => {
            setTravels(res.data.listTravels.items)
        }));
    }

    console.log(travels)

    return(
        <>
            {travels &&
                <>
                   <h2 className="text-4xl text-indigo-800 font-semibold text-center">Liste de mes trajets à venir</h2>
                    {travels.map((travel => {
                            return (
                                <div key={travel.id} onClick={() => setModalHandler({...modalHandler, isDisplayed: !modalHandler.isDisplayed, travelId: travel.id, isRefreshed: false})} className='flex flex-row items-center bg-white shadow-md hover:shadow-xl ease-in duration-200 p-8 rounded-md cursor-pointer space-x-6 w-6/12 mx-auto'>
                                    <TruckIcon className='w-10 h-10 bg-indigo-800 text-white p-2 rounded-full'/>
                                    <div className='flex flex-col'>
                                        <p className='text-xs'>Du: {new Date(travel.dateBegin).toLocaleString()}</p>
                                        <p className='text-xs'>Au: {new Date(travel.dateEnd).toLocaleString()}</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        {travel.passengers ? 
                                            <>
                                            {travel.passengers.map((elem, index) => (<UserCircleIcon key={index} className='w-8 h-8 text-indigo-600' />))}
                                            {[ ...Array(travel.places - travel.passengers.length).keys() ].map((index) => {
                                                return (
                                                    <UserCircleIcon key={index} className='w-8 h-8 text-indigo-200' />
                                                )
                                            })}
                                            </>
                                        :
                                            [ ...Array(travel.places).keys() ].map((index) => {
                                                return (
                                                    <UserCircleIcon key={index} className='w-8 h-8 text-indigo-200' />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        }
                    ))}
                    { modalHandler.isDisplayed && 
                        <ModalTravel modalHandler={modalHandler} setModalHandler={setModalHandler} idTravel={modalHandler.travelId} /> 
                    }
                </>
            }        
        </>
    )
}