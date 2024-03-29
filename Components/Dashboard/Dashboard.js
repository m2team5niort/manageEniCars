import React, { useState, useEffect } from 'react';
import { DotsVerticalIcon, CogIcon, UserCircleIcon } from '@heroicons/react/solid'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import DashboardCard from "./Cards/DashboardCard";
import MapTravel from "../MySpace/MapTravel";

export default function Dashboard({ ssrDataDashboard }) {

    const [dashboardData, setDashboardDate] = useState(ssrDataDashboard)

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'dark'
                }
            },
            title: {
                display: true,
                text: 'Réservations de l\'année',
                color: 'dark'
            },
        },
    };

    const labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cette année',
                data: [12, 21, 34, 28, 40, 25, 8, 10, dashboardData.travels.length],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                color: 'white'
            }
        ],
    };

    return (
        <div id="Content" className="container-content">
            <div id="Card1" className=" pl-4 pr-4 pb-4">
                <div className="h-full w-full bg-gray-50 rounded-lg">
                    <DashboardCard title="Nombre de voitures" label="Voitures" color="green-500" data={dashboardData.cars.length}/>
                </div>
            </div>
            <div id="Card2" className=" pl-4 pr-4 pb-4">
                <div className="h-full w-full bg-gray-50 rounded-lg">
                    <DashboardCard title="Nombre de réservations" label="Réservations" color="yellow-500" data={dashboardData.travels.length} />
                </div>
            </div>
            <div id="Card3" className=" pl-4 pr-4 pb-4">
                <div className="h-full w-full bg-gray-50 rounded-lg">
                    <DashboardCard title="Nombre de modèles" label="Modèles" color="orange-500" data={dashboardData.models.length}/>
                </div>
            </div>
            <div id="Card4" className=" pl-4 pr-4 pb-4">
                <div className="h-full w-full bg-gray-50 rounded-lg">
                    <DashboardCard title="Nombre d'utilisateurs" label="Utilisateurs" color="indigo-500" data={dashboardData.users.length} />
                </div>
            </div>

            <div id="Mapbox" className="p-4">
                <div className="h-full w-full bg-gray-50 rounded-lg">
                    <MapTravel className="h-full" />
                </div>
            </div>
            <div id="Statistics" className=" p-4">
                <div className="h-full w-full bg-gray-50 rounded-lg">
                    <Line options={options} data={data} className="p-4 " />
                </div>
            </div>

            <div id="Users" className=" p-4 ">
                <div className="h-full w-full bg-gray-50 rounded-lg overflow-y-auto">
                    <div className="flex flex-col px-4">
                        <div className="flex flex-row px-4 h-16 items-center justify-between">
                            <p className="text-dark text-left text-lg font-semi-bold"> Les derniers utilisateurs : </p>
                        </div>
                        <div className=" px-4 items-center justify-between h-72 space-y-6">
                            {dashboardData.users.map(user => {
                                return (
                                    <div key={user.id} id="user" className="flex flex-row items-center space-x-2">
                                        
                                        <UserCircleIcon className='text-dark w-10 h-10 rounded-full mx-auto'/>
                                        
                                        <div className="flex flex-col w-full">
                                                <h4 className="text-dark text-sm"> {user.email} </h4>
                                                {user.isAdmin ? <span className="mr-auto bg-yellow-500 text-dark text-xs font-semi-bold px-2 rounded dark:bg-yellow-200 dark:text-green-900"> Admin </span> : <span className="mr-auto bg-blue-500 text-dark text-xs font-semi-bold px-2 rounded dark:bg-yellow-200 dark:text-green-900"> Utilisateur </span> }
                                        </div>
                                </div>
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>
            <div id="Reservations" className=" p-4">
                <div className="h-full w-full bg-gray-50 rounded-lg overflow-y-auto">
                    <div className="flex flex-col px-4">
                        <div className="flex flex-row px-4 h-16 items-center justify-between">
                            <p className="text-dark text-left text-lg font-semi-bold"> Les dernières réservations : </p>
                            <DotsVerticalIcon className="w-6 text-dark " />
                        </div>
                        <div className=" px-4 items-center justify-between h-72">
                            <div className="relative overflow-x-auto sm:rounded-lg ">
                                <table className="w-full text-sm text-left text-dark dark:text-gray-400">
                                    <thead className="text-xs text-dark uppercase bg-transparent dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Conducteur
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Départ
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Arrivée
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Nombre de places
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {dashboardData.travels.map(travel => {
                                        return (
                                            <tr key={travel.id} className="bg-gray-50 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 text-dark">
                                                <td className="px-6 py-4">
                                                    {travel.driver.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {new Date(travel.dateBegin).toLocaleString()}
                                                </td>
                                                <td className="px-6 py-4">
                                                {new Date(travel.dateEnd).toLocaleString()}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {travel.places}
                                                </td>
                                        </tr>
                                        )
                                    })}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}