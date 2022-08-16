import React, {useState, useEffect} from 'react'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import MapTravel from '../MapTravel'
import ModalDesctination from './Modals/ModalDestination'
import ListTravels from './ListTravels'
import { API } from 'aws-amplify';

let initialFormState = { dateBegin: "", dateEnd: "", id: "", places: 10, travelCarId: "", travelDriverId: "", travelModelId: ""}

export default function Publish({ssrDataMySpace}){

    const [data, setData] = useState({
        cars: ssrDataMySpace.cars,
        models: ssrDataMySpace.models,
        user: ssrDataMySpace.user
    })
    const [modalDisplay, setModalDisplay] = useState(false)
    const [trip, setTrip] = useState({
        arrival: 'Départ',
        destination: 'Destination'
    })
    const [travel, setTravel] = useState({
        locations: [],
        driver: {},
        passengers: [],
        car: '',
        model: '',
        dateBegin: '',
        dateEnd: '',
        places: 0
    })

    const publishTravel = () => {
        setTravel({...travel, driver: data.user})
    }

    useEffect(() => {
        setTravel({...travel, locations: [trip.arrival, trip.destination]})
    },[trip])

    console.log(travel)

    return(
        <div className='flex flex-col space-y-12'>
            <div className="flex flex-row w-full">
                <div className="bg-white shadow-lg p-8 rounded-xl w-full">
                    <div className='flex flex-row space-x-6'>
                        <div className='flex flex-col space-y-6 w-4/12'>
                            <input onChange={e => setTravel({...travel, dateBegin: e.target.value})} className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold`}
                                type='datetime-local'
                            />
                            <input onChange={e => setTravel({...travel, dateEnd: e.target.value})} className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold`}
                                type='datetime-local'
                            />
                            <div className="relative">
                                <LocationMarkerIcon className="h-4 w-4 absolute top-3 left-4 text-gray-700" />
                                <div onClick={() => setModalDisplay(true)} className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 pl-10 pr-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold cursor-pointer`}>
                                    {trip.arrival} / {trip.destination}
                                </div>
                            </div>
                            <select onChange={e => setTravel({...travel, model: JSON.parse(e.target.value)})} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold">
                                {data.models.map((elem => {
                                        return (
                                            <option value={JSON.stringify(elem.id)} key={elem.id}>{elem.name}</option>
                                        )
                                    }
                                ))}
                            </select>
                            <select onChange={e => setTravel({...travel, car: JSON.parse(e.target.value)})} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold">
                                {data.cars.map((elem => {
                                        return (
                                            <option value={JSON.stringify(elem.id)} key={elem.id}>{elem.name}</option>
                                        )
                                    }
                                ))}
                            </select>
                            <input onChange={e => setTravel({...travel, places: e.target.value})} className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold`}
                                type='number'
                                defaultValue={'0'}
                                placeholder='Passager'
                                min={0}
                                max={4}
                            />
                            <button onClick={() => publishTravel()} className='bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-cyan-500 transition'>Publier mon trajet</button>
                        </div>
                        <div className=" w-8/12">
                            <MapTravel />
                        </div>
                    </div>
                </div>
                {modalDisplay && <ModalDesctination setModalDisplay={setModalDisplay} setTrip={setTrip} trip={trip} />}
            </div>
            <ListTravels />
        </div>
    )
}