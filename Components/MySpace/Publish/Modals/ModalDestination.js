import React, { useEffect } from 'react'
import { Dialog, Transition, Tab } from '@headlessui/react'
import { Fragment, useState } from 'react'
import useSWR from 'swr'
import { clearPrewarmedResources } from 'mapbox-gl'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function ModalDesctination({ setModalDisplay, setTrip, trip }) {

    const { data, error } = useSWR('/api/myspace/markerEni', fetcher)
    let [isOpen, setIsOpen] = useState(true)
    let [tab, setTab] = useState(0)
    let [categories, setCategories] = useState({})
    let [destinations, setDestinations] = useState(['start', 'end'])

    function closeModal() {
        setIsOpen(false)
        setModalDisplay(false)
    }

    useEffect(() => {
        data.eni.forEach(elem => {
            elem.selection = false
        })
        setCategories({
            start: data.eni,
            destination: data.eni
        })
    }, [])

    const setChoiceTrip = (name, id) => {
        if (tab === 0) {
            setTrip(prev => ({ ...prev, arrival: name }))
            setDestinations(prev => ({ ...prev, start: name }))
        } else {
            setTrip(prev => ({ ...prev, destination: name }))
            setDestinations(prev => ({ ...prev, end: name }))
        }
    }

    console.log(data)

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
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gray-50 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 mb-6"
                                    >
                                        Les lieux de départ
                                    </Dialog.Title>
                                    <div className="w-full px-2 py-2 sm:px-0">
                                        <Tab.Group
                                            onChange={(index) => {
                                                setTab(index)
                                            }}
                                        >
                                            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                                                {Object.keys(categories).map((category, index) => (
                                                    <Tab
                                                        key={index}
                                                        className={({ selected }) =>
                                                            classNames(
                                                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                                selected
                                                                    ? 'bg-white shadow'
                                                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                                            )
                                                        }
                                                    >
                                                        {category === 'start' ? 'Départ' : 'Destination'}
                                                    </Tab>
                                                ))}
                                            </Tab.List>
                                            <div className='w-full flex flex-row mt-6 content-center bg-gray-200 p-2 space-x-4'>
                                                <input readOnly value={trip.arrival} type='text' className={'px-6 py-2 w-6/12 bg-gray-100 rounded-md'} />
                                                <input value={trip.destination} type='text' className={'px-6 py-2 w-6/12 bg-gray-100 rounded-md'} />
                                            </div>
                                            <Tab.Panels className="mt-6">
                                                {Object.values(categories).map((posts, idx) => (
                                                    <Tab.Panel
                                                        key={idx}
                                                        className={classNames(
                                                            'rounded-xl bg-white p-3',
                                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                                        )}
                                                    >
                                                        <ul>
                                                            {posts.map((post, index) => (
                                                                post.selection === false ?
                                                                    <li
                                                                        key={index}
                                                                        className={`relative rounded-md p-3 hover:bg-gray-100 ${post.selection === true ? `border-2 border-${post.type}-400 hover:bg-white` : ''}`}
                                                                        onClick={() => setChoiceTrip(post.title, post.id)}
                                                                    >
                                                                        <h3 className="text-sm font-medium leading-5 text-gray-900">
                                                                            {post.title}
                                                                        </h3>

                                                                        <p className="text-xs font-normal leading-4 text-gray-500">
                                                                            {post.address}
                                                                        </p>

                                                                        <p className="text-xs font-normal leading-4 text-gray-400">
                                                                            {post.zip}
                                                                        </p>

                                                                        <a
                                                                            href="#"
                                                                            className={classNames(
                                                                                'absolute inset-0 rounded-md',
                                                                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                                            )}
                                                                        />
                                                                    </li>
                                                                    :
                                                                    ''
                                                            ))}
                                                        </ul>
                                                    </Tab.Panel>
                                                ))}
                                            </Tab.Panels>
                                        </Tab.Group>
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
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
