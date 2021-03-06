import { DotsVerticalIcon } from '@heroicons/react/solid'

export default function DashboardCard({ title, label, color, data }) {
    return (
        <div className="flex flex-col px-4">
            <div className="flex flex-row px-4 h-16 items-center justify-between">
                <p className="text-white text-left text-lg font-semi-bold"> {title} : </p>
                <DotsVerticalIcon className="w-6 text-white " />
            </div>
            <div className="flex flex-row px-4 items-center justify-between h-16">
                <span className={`bg-${color} text-white text-sm font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900`}> {label} </span>
                <p className="text-white text-left text-4xl"> {data} </p>
            </div>
            <div className="flex flex-row px-4 items-center justify-between h-14">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className={`bg-${color} h-2.5 rounded-full`} style={{ width: "55%" }}></div>
                </div>
            </div>
        </div>
    )
}