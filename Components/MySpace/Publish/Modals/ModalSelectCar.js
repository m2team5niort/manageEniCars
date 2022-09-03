import { Listbox, Transition, Dialog } from '@headlessui/react'
import { API, graphqlOperation } from 'aws-amplify'
import { Fragment, useState, useEffect } from 'react'
import { getLocation, getCarsFilteredByPlaces } from '../../../../graphql/queries'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

export default function ModalSelectCar({modalDisplay, setModalDisplay, trip}) {

    const selectPlace = [
        { nbrPlace: 'Tout' },
        { nbrPlace: 2 },
        { nbrPlace: 3 },
        { nbrPlace: 4 },
        { nbrPlace: 5 },
    ]

    const [isOpen, setIsOpen] = useState(true)
    const [locationSelected, setLocationSelected] = useState(trip)
    const [cars, setCars] = useState([])
    const [selected, setSelected] = useState(selectPlace[0]);

    function closeModal() {
        setIsOpen(false)
        setModalDisplay({...modalDisplay, car: false})
    }

    useEffect(() => {
        if(locationSelected.id !== 'tbd'){
            fetchLocation(locationSelected)
        }
    },[])

    async function fetchLocation({id}){
        await API.graphql({query: getLocation, variables: {id: id}}).then((res) => {
            setCars(res.data.getLocation.cars.items)
        })
    }

    async function getCarsFilteredByPlaces({id}, nbrPlace){
        let carsFiltered;
        await API.graphql({query: getLocation, variables: {id: id}}).then((res) => {
            carsFiltered = res.data.getLocation.cars.items.filter(elem => elem.places === nbrPlace)
            setCars(carsFiltered)
        })
    }

    async function handleSelected(event){
        setSelected(event)
        if(event.nbrPlace === 'Tout'){
            fetchLocation(locationSelected)
        }else{
            getCarsFilteredByPlaces(locationSelected, event.nbrPlace)
        }
    }

    console.log(cars)

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900 flex flex-row justify-between items-center"
                        >
                            Je sélectionne ma voiture
                            <Listbox value={selected} onChange={(e) => handleSelected(e)}>
                                <div className="relative mt-1">
                                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    <span className="block">Nbr place: {selected.nbrPlace}</span>
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
                                    {selectPlace.map((place, index) => (
                                        <Listbox.Option
                                        key={index}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 text-center ${
                                            active ? 'bg-gray-50 text-indigo-500' : 'text-gray-900'
                                            }`
                                        }
                                        value={place}
                                        >
                                        {({ selected }) => (
                                            <>
                                            <span
                                                className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                                }`}
                                            >
                                                {place.nbrPlace}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center text-black">
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
                        </Dialog.Title>
                        <div className="my-12">
                            <div className='flex flex-wrap gap-12 justify-center'>
                            {cars.length !== 0 ? 
                                cars.map(car => {
                                    return(
                                        <>
                                            <div className='p-4 bg-gray-50 rounded-lg flex flex-col w-3/12 space-y-1 cursor-pointer hover:bg-gray-100 transition duration-150 ease-in'>
                                                <h3 className='font-semibold text-sm'>{car.name}</h3>
                                                <p className='font-normal text-xs'>{car.description}</p>
                                                <span className="flex justify-center bg-white text-black text-md font-semi-bold mr-2 px-3 py-0.5 rounded border-x-8 border-blue-500 shadow-sm"> {car.numberPlate} </span>
                                            </div>
                                        </>
                                    )
                                })
                            : 
                            <div>Aucune voiture répondent à vos critères</div>}
                            </div>
                        </div>

                        <div className="mt-4">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                            >
                            Valider
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
        </>
    )
}