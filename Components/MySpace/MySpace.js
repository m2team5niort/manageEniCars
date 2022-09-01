import { Tab } from '@headlessui/react'
import Reservation from "./Reservation/Reservation";
import Publish from "./Publish/Publish";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MySpace({ssrDataMySpace}) {

    return (
        <div id="Container" className="bg-cyan-100/10">
            <div className="container px-48 mx-auto space-y-12 py-20">
                <h1 className="text-5xl text-indigo-800 font-semibold text-center">Publier, réserver un trajet avec Eni ManageCars</h1>
                <div className="w-full sm:px-0 space-y-6">
                    <Tab.Group>
                        <Tab.List className="flex w-full max-w-md space-x-1 rounded-xl bg-blue-900/20 p-1">
                            <div className='w-full max-w-md flex space-x-2 bg-indigo-800 p-2 rounded-md'>
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
                                        Je publie mon trajet
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
                                    Je réserve un trajet
                                </Tab>
                            </div>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <Publish ssrDataMySpace={ssrDataMySpace}/>
                            </Tab.Panel>
                            <Tab.Panel>
                                <Reservation user={ssrDataMySpace.user}/>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    )
}