import React, {useState, useEffect, Fragment} from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { listLocations, getLocation } from '../../../graphql/queries'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

export default function ListCarsLocation(){

    const [locations, setLocations] = useState();
    const [selected, setSelected] = useState();
    const [locationCars, setLocationCars] = useState([]);

    useEffect(() => {
        fetchLocations();
    }, []);


    async function fetchLocations() {
        let location;
        await API.graphql(graphqlOperation(listLocations, { filter: { isReferenced: { eq: true } } })).then((res) => {
            location = res.data.listLocations.items[0];
            setLocations(res.data.listLocations.items);
            setSelected(location);
            fetchLocationCars(location)
        })
    }

    async function fetchLocationCars({id}){
        console.log(id)
        await API.graphql({ query: getLocation, variables: { id: id  } }).then((res) => {
            console.log(res.data.getLocation)
            setLocationCars(res.data.getLocation.cars.items)
        })
    }

    async function handleSelected(location){
        setSelected(location)
        fetchLocationCars(location)
    }
    
    return(
        <>
            {locations && selected ?
            <div className="shadow-md sm:rounded-lg bg-gray-50 ">
                <div className='flex flex-row justify-between px-6 py-4 items-center'>
                    <h1 className='text-dark'> Liste des voitures </h1>
                    <div className="w-72">
                        <Listbox value={selected} onChange={(e) => handleSelected(e)}>
                            <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selected.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <SelectorIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {locations.map(location => (
                                    <Listbox.Option
                                    key={location.id}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-blue-100 text-dark' : 'text-gray-900'
                                        }`
                                    }
                                    value={location}
                                    >
                                    {({ selected }) => (
                                        <>
                                        <span
                                            className={`block truncate ${
                                            selected ? 'font-medium' : 'font-normal'
                                            }`}
                                        >
                                            {location.name}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                        </>
                                    )}
                                    </Listbox.Option>
                                ))}
                                </Listbox.Options>
                            </Transition>
                            </div>
                        </Listbox>
                    </div>
                </div>

                <table className=" w-full text-sm text-left text-dark">
                    <thead className="text-xs text-dark uppercase bg-transparent dark:bg-gray-50">
                        <tr>
                            <th scope="col-1" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col-3" className="px-6 py-3">
                                Nom
                            </th>
                            <th scope="col-3" className="px-6 py-3">
                                Modèle
                            </th>
                            <th scope="col-1" className="px-6 py-3">
                                Nb Places
                            </th>
                            <th scope="col-2" className="px-6 py-3">
                                Clé n°1
                            </th>
                            <th scope="col-2" className="px-6 py-3">
                                Clé n°2
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { locationCars &&
                            locationCars.map((car, index) => (
                                <tr key={car.id} className="bg-gray-50 hover:text-gray-900 transition text-dark font-semibold hover:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {car.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {car.model.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-dark text-md font-semi-bold mr-2"> {car.places} </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="bg-blue-500 text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> Nantes </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="bg-blue-500 text-white text-md font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> C4 </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            :
            ''
            }
        </>
    )
}