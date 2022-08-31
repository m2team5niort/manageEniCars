import React, {useState, useEffect} from 'react'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import MapTravel from '../MapTravel'
import ModalDestination from './Modals/ModalDestination'
import ListTravels from './ListTravels'
import { API } from 'aws-amplify';
import { createTravel as createTravelMutation, createLocation as createLoctionMutation } from '../../../graphql/mutations';

export default function Publish({ssrDataMySpace}){

    const [data, setData] = useState({
        cars: ssrDataMySpace.cars,
        models: ssrDataMySpace.models,
        user: ssrDataMySpace.user
    })
    const [modalDisplay, setModalDisplay] = useState(false)
    const [trip, setTrip] = useState([{
        arrival: {
            name: 'Départ',
            id: ''
        },
        destination: {
            name: 'Destination',
            id: '',
            object: {}
        }
    }])
    const [travel, setTravel] = useState({
        dateBegin: "", 
        dateEnd: "", 
        places: 0, 
        travelCarId: "",
        travelDriverId: data.user.id,
        travelModelId: "",
        travelDepartureId: "",
        travelArrivalId: ""
    })
    const [newTravel, setNewTravel] = useState(0)

    console.log(trip)

    async function createTravel() {

        travel.travelDepartureId = trip[0].arrival.id

        if(Object.keys(trip[0].destination.object).length !== 0 && trip[0].destination.object.constructor === Object){
            await API.graphql({ query: createLoctionMutation, variables: {input: trip[0].destination.object}}).then((res) => {

                travel.travelArrivalId = res.data.createLocation.id
                if ((!travel.dateBegin && !travel.dateEnd && !travel.places && !travel.travelCarId && !travel.travelDriverId && !travel.travelModelId && !travel.travelDepartureId && !travel.travelArrivalId) && (travel.travelDepartureId !== travel.travelArrivalId)) return;

                API.graphql({ query: createTravelMutation, variables: { input: travel } }).then(() => {
                    setTravel(travel)
                    setNewTravel(newTravel+1)
                }).catch((err) => {
                    console.log(err)
                });
            })
        }else{
            travel.travelArrivalId = trip[0].destination.id
            if ((!travel.dateBegin && !travel.dateEnd && !travel.places && !travel.travelCarId && !travel.travelDriverId && !travel.travelModelId && !travel.travelDepartureId && !travel.travelArrivalId) && (travel.travelDepartureId !== travel.travelArrivalId)) return;

            API.graphql({ query: createTravelMutation, variables: { input: travel } }).then(() => {
                setTravel(travel)
                setNewTravel(newTravel+1)
            }).catch((err) => {
                console.log(err)
            });
        }

    }

    return(
        <div className='flex flex-col space-y-12'>
            <div className="flex flex-row w-full">
                <div className="bg-white shadow-lg p-8 rounded-xl w-full">
                    <div className='flex flex-row space-x-6'>
                        <div className='flex flex-col space-y-6 w-4/12'>
                            <input onChange={e => setTravel({...travel, dateBegin: new Date(e.target.value).toISOString()})} className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold`}
                                type='datetime-local'
                            />
                            <input onChange={e => setTravel({...travel, dateEnd: new Date(e.target.value).toISOString()})} className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold`}
                                type='datetime-local'
                            />
                            <div className="relative">
                                <LocationMarkerIcon className="h-4 w-4 absolute top-3 left-4 text-gray-700" />
                                <div onClick={() => setModalDisplay(true)} className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 pl-10 pr-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold cursor-pointer`}>
                                    {trip[0].arrival.name} / {trip[0].destination.name}
                                </div>
                            </div>
                            <select onChange={e => setTravel({...travel, travelModelId: JSON.parse(e.target.value)})} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold">
                                {data.models.map((elem => {
                                        return (
                                            <option value={JSON.stringify(elem.id)} key={elem.id}>{elem.name}</option>
                                        )
                                    }
                                ))}
                            </select>
                            <select onChange={e => setTravel({...travel, travelCarId: JSON.parse(e.target.value)})} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold">
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
                            <button onClick={() => createTravel()} className='bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-cyan-500 transition'>Publier mon trajet</button>
                        </div>
                        <div className=" w-8/12">
                            <MapTravel />
                        </div>
                    </div>
                </div>
                {modalDisplay && <ModalDestination setModalDisplay={setModalDisplay} setTrip={setTrip} trip={trip} />}
            </div>
            <ListTravels newTravel={newTravel}/>
        </div>
    )
}