import ListCarsLocation from "./ListCarsLocation";
import ListLocation from "./ListLocation";
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Location() {

    return (
            <main id="Content">
                <div className='px-8'>
                    <div className="w-full sm:px-0 space-y-6">
                        <Tab.Group>
                            <Tab.List className="flex w-full max-w-lg space-x-1 rounded-xl bg-blue-900/20 p-1">
                                <div className='w-full max-w-lg flex space-x-2 bg-blue-500 p-2 rounded-md'>
                                    <Tab
                                        className={({ selected }) =>
                                            classNames(
                                            'w-full rounded-lg py-2.5 text-sm leading-5 text-blue-700',
                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white shadow font-bold'
                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                            )
                                        }
                                        >
                                            Liste des lieux
                                        </Tab>
                                        <Tab
                                            className={({ selected }) =>
                                                classNames(
                                                    'w-full rounded-lg py-2.5 text-sm leading-5 text-blue-700',
                                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                    selected
                                                        ? 'bg-white shadow font-bold'
                                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                                )
                                            }
                                        >
                                        Liste des voitures par lieux
                                    </Tab>
                                </div>
                            </Tab.List>
                            <Tab.Panels>
                                <Tab.Panel>
                                    <ListLocation />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <ListCarsLocation />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </main>
    )
}