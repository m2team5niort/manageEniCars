import React, {useState} from 'react'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import MapTravel from '../MapTravel'
import ModalDesctination from './Modals/ModalDestination'

export default function Publish(){

    const [modalDisplay, setModalDisplay] = useState(false)
    const [trip, setTrip] = useState({
        arrival: 'Départ',
        destination: 'Destination'
    })

    return(
        <div className="flex flex-row w-full">
            <div className="bg-white shadow-lg p-8 rounded-xl w-full">
                <div className='flex flex-row space-x-6'>
                    <div className='flex flex-col space-y-6 w-4/12'>
                        <input className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold`}
                            type='date'
                        />
                        <input className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold`}
                            type='date'
                        />
                        <div className="relative">
                            <LocationMarkerIcon className="h-4 w-4 absolute top-3 left-4 text-gray-700" />
                            <div onClick={() => setModalDisplay(true)} className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 pl-10 pr-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold cursor-pointer`}>
                                {trip.arrival} / {trip.destination}
                            </div>
                        </div>
                        <select className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold">
                            <option>C3</option>
                        </select>
                        <input className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold`}
                            type='number'
                            defaultValue={'0'}
                            placeholder='Passager'
                            min={0}
                            max={4}
                        />
                        <button className='bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-cyan-500 transition'>Publier mon trajet</button>
                    </div>
                    <div className=" w-8/12">
                        <MapTravel />
                    </div>
                </div>
            </div>
            {modalDisplay && <ModalDesctination setModalDisplay={setModalDisplay} setTrip={setTrip} trip={trip} />}
        </div>
    )
}