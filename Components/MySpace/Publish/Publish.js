import React, {useState, useEffect} from 'react'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import MapTravel from '../MapTravel'
import ModalDestination from './Modals/ModalDestination'
import ModalSelectCar from './Modals/ModalSelectCar'
import ListTravels from './ListTravels'
import { API } from 'aws-amplify';
import { createTravel as createTravelMutation, createLocation as createLocationMutation } from '../../../graphql/mutations';

export default function Publish({ssrDataMySpace}){

    const [data, setData] = useState({
        cars: ssrDataMySpace.cars,
        models: ssrDataMySpace.models,
        user: ssrDataMySpace.user
    })
    const [modalDisplay, setModalDisplay] = useState({
        destination: false,
        car: false
    })
    const [trip, setTrip] = useState([{
        departure: {
            name: 'Départ',
            id: '',
            object: {}
        },
        arrival: {
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
        travelArrivalId: "",
        passengers: []
    })
    const [newTravel, setNewTravel] = useState(0)

    async function createTravel() {

        let travelDeparture;
        let travelArrival;

        if(trip[0].departure.id === 'tbd'){
            travelDeparture = await API.graphql({ query: createLocationMutation, variables: {input: trip[0].departure.object}})
            travel.travelDepartureId = travelDeparture.data.createLocation.id
        }else{
            travel.travelDepartureId = trip[0].departure.id
        }
        
        if (trip[0].arrival.id === 'tbd'){
            travelArrival = await API.graphql({ query: createLocationMutation, variables: {input: trip[0].arrival.object}})
            travel.travelArrivalId = travelArrival.data.createLocation.id
        }else{
            travel.travelArrivalId = trip[0].arrival.id
        }

        if ((!travel.dateBegin && !travel.dateEnd && !travel.places && !travel.travelCarId && !travel.travelDriverId && !travel.travelModelId && !travel.travelDepartureId && !travel.travelArrivalId) && (travel.travelDepartureId !== travel.travelArrivalId)) return;

        API.graphql({ query: createTravelMutation, variables: { input: travel } }).then(() => {
            setTravel(travel)
            setNewTravel(newTravel+1)
        }).catch((err) => {
            console.log(err)
        });

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
                                <div onClick={() => setModalDisplay({...modalDisplay, destination: true})} className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 pl-10 pr-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold cursor-pointer`}>
                                    {trip[0].departure.name} / {trip[0].arrival.name}
                                </div>
                            </div>
                            <div className="relative">
                                {trip[0].departure.id !== '' && trip[0].arrival.id !== '' && 
                                    <div onClick={() => setModalDisplay({...modalDisplay, car: true})} className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold cursor-pointer`}>
                                        Je choisi ma voiture
                                    </div>
                                }
                            </div>
                            <button onClick={() => createTravel()} className='bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-cyan-500 transition'>Publier mon trajet</button>
                        </div>
                        <div className=" w-8/12">
                            <MapTravel />
                        </div>
                    </div>
                </div>
                {modalDisplay.destination && <ModalDestination setModalDisplay={setModalDisplay} modalDisplay={modalDisplay} setTrip={setTrip} trip={trip} />}
                {modalDisplay.car && <ModalSelectCar setModalDisplay={setModalDisplay} modalDisplay={modalDisplay} trip={trip[0].departure} />}
            </div>
            <ListTravels newTravel={newTravel}/>
        </div>
    )
}