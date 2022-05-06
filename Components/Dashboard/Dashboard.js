import Map from "./Map"
import React, { useState, useEffect } from 'react';
import { ChartBarIcon, FlagIcon, KeyIcon, DotsVerticalIcon, CogIcon } from '@heroicons/react/solid'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import DashboardCard from "./Cards/DashboardCard";

export default function Dashboard({ ssrDataDashboard }) {

    const [dashboardData, setDashboardDate] = useState(ssrDataDashboard)

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white'
                }
            },
            title: {
                display: true,
                text: 'Réservations de l\'année',
                color: 'white'
            },
        },
    };

    const labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cette année',
                data: [33, 53, 85, 41, 44, 65],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                color: 'white'
            },
            {
                label: 'Année dernière',
                data: [23, 73, 25, 41, 74, 95],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                color: 'white'
            },
        ],
    };

    return (
        <div id="Content" className="container-content">
            <div id="Card1" className=" pl-4 pr-4 pb-4">
                <div className="h-full w-full bg-gray-800 rounded-lg">
                    <DashboardCard title="Nombre de voitures" label="Voitures" color="green-500" data={dashboardData.cars.length} />
                </div>
            </div>
            <div id="Card2" className=" pl-4 pr-4 pb-4">
                <div className="h-full w-full bg-gray-800 rounded-lg">
                    <DashboardCard title="Nombre de réservations" label="Réservations" color="yellow-500" data={256} />
                </div>
            </div>
            <div id="Card3" className=" pl-4 pr-4 pb-4">
                <div className="h-full w-full bg-gray-800 rounded-lg">
                    <DashboardCard title="Nombre de modèles" label="Modèles" color="blue-500" data={dashboardData.models.length} />
                </div>
            </div>
            <div id="Card4" className=" pl-4 pr-4 pb-4">
                <div className="h-full w-full bg-gray-800 rounded-lg">
                    <DashboardCard title="Nombre d'utilisateurs" label="Utilisateurs" color="pink-500" data={300} />
                </div>
            </div>

            <div id="Mapbox" className="p-4">
                <div className="h-full w-full bg-gray-800 rounded-lg">
                    <Map className="h-full" />
                </div>
            </div>
            <div id="Statistics" className=" p-4">
                <div className="h-full w-full bg-gray-800 rounded-lg">
                    <Line options={options} data={data} className="p-4 " />
                </div>
            </div>

            <div id="Users" className=" p-4">
                <div className="h-full w-full bg-gray-800 rounded-lg">
                    <div className="flex flex-col px-4">
                        <div className="flex flex-row px-4 h-16 items-center justify-between">
                            <p className="text-white text-left text-lg font-semi-bold"> Les derniers utilisateurs : </p>
                            <DotsVerticalIcon className="w-6 text-white " />
                        </div>
                        <div className=" px-4 items-center justify-between h-72">
                            <div id="user" className="flex flex-row">
                                <div className="flex flex-col  h-16 w-24 justify-center">
                                    <img className="w-10 h-10 rounded-full mx-auto" src="https://buffer.com/library/content/images/2020/05/Ash-Read.png" alt="user photo" />
                                </div>
                                <div className="flex flex-col  h-16 w-full">
                                    <div className="flex flex-row h-8">
                                        <h1 className="p-2 text-white"> NALIN Brandon </h1>
                                    </div>
                                    <div className="flex flex-row h-8">
                                        <h6 className="pl-2 text-gray-500 "> Lorem Ipsum Dolor </h6>
                                    </div>
                                </div>
                                <div className="flex flex-col  h-16 w-24 justify-center">
                                    <span className=" mx-auto bg-yellow-500 text-white text-sm font-semi-bold  px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> Admin </span>
                                </div>
                            </div>
                            <div id="user" className="flex flex-row">
                                <div className="flex flex-col  h-16 w-24 justify-center">
                                    <img className="w-10 h-10 rounded-full mx-auto" src="https://www.timexpress.ae/wp-content/uploads/2016/11/circle-man.png" alt="user photo" />
                                </div>
                                <div className="flex flex-col  h-16 w-full">
                                    <div className="flex flex-row h-8">
                                        <h1 className="p-2 text-white"> DUPRES Michel </h1>
                                    </div>
                                    <div className="flex flex-row h-8">
                                        <h6 className="pl-2 text-gray-500 "> Lorem Ipsum Dolor </h6>
                                    </div>
                                </div>
                                <div className="flex flex-col  h-16 w-24 justify-center">
                                    <span className=" mx-auto bg-green-500 text-white text-sm font-semi-bold  px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> Utilisateur </span>
                                </div>
                            </div>
                            <div id="user" className="flex flex-row">
                                <div className="flex flex-col  h-16 w-24 justify-center">
                                    <img className="w-10 h-10 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-CP7ChC_RjSlZcIC59_FH4KBl41Enn74Zw&usqp=CAU" alt="user photo" />
                                </div>
                                <div className="flex flex-col  h-16 w-full">
                                    <div className="flex flex-row h-8">
                                        <h1 className="p-2 text-white"> MARTES Julie </h1>
                                    </div>
                                    <div className="flex flex-row h-8">
                                        <h6 className="pl-2 text-gray-500 "> Lorem Ipsum Dolor </h6>
                                    </div>
                                </div>
                                <div className="flex flex-col  h-16 w-24 justify-center">
                                    <span className=" mx-auto bg-green-500 text-white text-sm font-semi-bold  px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> Utilisateur </span>
                                </div>
                            </div>
                            <div id="user" className="flex flex-row">
                                <div className="flex flex-col  h-16 w-24 justify-center">
                                    <img className="w-10 h-10 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oC0cLNyFt4XMtPNe35Tct-8iicsxnDi--fghnv05pczTghd04zc3wR9ATttVVHswLX4&usqp=CAU" alt="user photo" />
                                </div>
                                <div className="flex flex-col  h-16 w-full">
                                    <div className="flex flex-row h-8">
                                        <h1 className="p-2 text-white"> GERARD Jordan </h1>
                                    </div>
                                    <div className="flex flex-row h-8">
                                        <h6 className="pl-2 text-gray-500 "> Lorem Ipsum Dolor </h6>
                                    </div>
                                </div>
                                <div className="flex flex-col  h-16 w-24 justify-center">
                                    <span className=" mx-auto bg-blue-500 text-white text-sm font-semi-bold  px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-green-900"> Visiteur </span>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <div id="Reservations" className=" p-4">
                <div className="h-full w-full bg-gray-800 rounded-lg">
                    <div className="flex flex-col px-4">
                        <div className="flex flex-row px-4 h-16 items-center justify-between">
                            <p className="text-white text-left text-lg font-semi-bold"> Les dernières réservations : </p>
                            <DotsVerticalIcon className="w-6 text-white " />
                        </div>
                        <div className=" px-4 items-center justify-between h-72">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-white uppercase bg-transparent dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                #
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Color
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Category
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Price
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="px-6 py-4  dark:text-white whitespace-nowrap">
                                                Apple MacBook Pro 17"
                                            </th>
                                            <td className="px-6 py-4">
                                                Sliver
                                            </td>
                                            <td className="px-6 py-4">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4">
                                                $2999
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <CogIcon className="text-white h-6 w-6" />
                                            </td>
                                        </tr>
                                        <tr className="bg-transparent  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="px-6 py-4  dark:text-white whitespace-nowrap">
                                                Microsoft Surface Pro
                                            </th>
                                            <td className="px-6 py-4">
                                                White
                                            </td>
                                            <td className="px-6 py-4">
                                                Laptop PC
                                            </td>
                                            <td className="px-6 py-4">
                                                $1999
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <CogIcon className="text-white h-6 w-6" />
                                            </td>
                                        </tr>
                                        <tr className="bg-transparent dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="px-6 py-4  dark:text-white whitespace-nowrap">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-6 py-4">
                                                Black
                                            </td>
                                            <td className="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td className="px-6 py-4">
                                                $99
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <CogIcon className="text-white h-6 w-6" />
                                            </td>
                                        </tr>
                                        <tr className="bg-transparent dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="px-6 py-4  dark:text-white whitespace-nowrap">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-6 py-4">
                                                Black
                                            </td>
                                            <td className="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td className="px-6 py-4">
                                                $99
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <CogIcon className="text-white h-6 w-6" />
                                            </td>
                                        </tr>
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