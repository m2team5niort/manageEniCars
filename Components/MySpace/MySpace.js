import { Auth } from "aws-amplify";
import { LocationMarkerIcon } from '@heroicons/react/solid'

export default function MySpace() {

    return (
        <div id="Container" className="bg-cyan-200">
            <div className="container px-48 mx-auto space-y-16 py-12">
                <h1 className="text-4xl text-gray-700 font-semibold text-center">Publier, réserver un trajet avec ManageCars... <br /> Devenez responsable de vos trajets</h1>
                <div className="flex flex-row w-full">
                    <div className="bg-white shadow-lg p-8 rounded-xl flex flex-col space-y-6 w-4/12">
                        <input className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold`}
                            type='date'
                        />
                        <input className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold`}
                            type='date'
                        />
                        <div className="relative">
                            <LocationMarkerIcon className="h-4 w-4 absolute top-3 left-4 text-gray-700" />
                            <input className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 pl-12 pr-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold`} type='text' />
                        </div>
                        <div className="relative">
                            <LocationMarkerIcon className="h-4 w-4 absolute top-3 left-4 text-gray-700" />
                            <input className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 pl-12 pr-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold`} type='text' />
                        </div>
                        <select className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold">
                            <option>C3</option>
                        </select>
                        <input className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-semibold`}
                            type='number'
                        />
                        <button className='bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-cyan-500 transition'>Publier mon trajet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}