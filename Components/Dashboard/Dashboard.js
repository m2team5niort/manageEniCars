import Map from "./Map"
import React from 'react';
import { ChartBarIcon, FlagIcon, KeyIcon, DotsVerticalIcon } from '@heroicons/react/solid'
import Navbar from "./Navbar";

export default function Dashboard() {

    return (
        <>
            <main>
                <h1 className="text-3xl font-bold">DASHBOARD - <span className="font-normal text-3xl">Suivi en temps réel des voitures</span></h1>

                <div className="date">
                    <input type='date' />
                </div>

                <div>
                    <Map />
                </div>

                <div className="recent-order">
                    <h2>Réservation récente</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Voiture</th>
                                <th>Destination</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Brandon</td>
                                <td>Nalin</td>
                                <td>Renault Mégane</td>
                                <td>Nantes</td>
                                <td className="state">En cours</td>
                                <td className="details"><DotsVerticalIcon className="w-4 h-4" /></td>
                            </tr>
                            <tr>
                                <td>Brandon</td>
                                <td>Nalin</td>
                                <td>Renault Mégane</td>
                                <td>Nantes</td>
                                <td className="state">En cours</td>
                                <td className="details"><DotsVerticalIcon className="w-4 h-4" /></td>
                            </tr>
                            <tr>
                                <td>Brandon</td>
                                <td>Nalin</td>
                                <td>Renault Mégane</td>
                                <td>Nantes</td>
                                <td className="state">En cours</td>
                                <td className="details"><DotsVerticalIcon className="w-4 h-4" /></td>
                            </tr>
                            <tr>
                                <td>Brandon</td>
                                <td>Nalin</td>
                                <td>Renault Mégane</td>
                                <td>Nantes</td>
                                <td className="state">En cours</td>
                                <td className="details"><DotsVerticalIcon className="w-4 h-4" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="#">Voir plus</a>
                </div>

            </main>

            <div className="right-section">
                <Navbar />
                <div className="insights">
                    <div className="reservations">
                        <ChartBarIcon className="h-10 w-10 bg-blue-600 p-2 rounded-full text-white" />
                        <div className="middle">
                            <div className="left">
                                <h3>Total des réservations</h3>
                                <h1>15</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle
                                        r="30"
                                        cx="40"
                                        cy="40"
                                    />
                                </svg>
                                <div className="number">
                                    <p>81%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Les 24 dernières heures</small>
                    </div>
                    <div className="travels">
                        <FlagIcon className="h-10 w-10 bg-pink-600 p-2 rounded-full text-white" />
                        <div className="middle">
                            <div className="left">
                                <h3>Total des trajets</h3>
                                <h1>23</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle
                                        r="30"
                                        cx="40"
                                        cy="40"
                                    />
                                </svg>
                                <div className="number">
                                    <p>79%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Les 24 dernières heures</small>
                    </div>
                    <div className="disponibility">
                        <KeyIcon className="h-10 w-10 bg-purple-600 p-2 rounded-full text-white" />
                        <div className="middle">
                            <div className="left">
                                <h3>Voitures disponibles</h3>
                                <h1>4</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle
                                        r="30"
                                        cx="40"
                                        cy="40"
                                    />
                                </svg>
                                <div className="number">
                                    <p>45%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Les 24 dernières heures</small>
                    </div>
                </div>
            </div>
        </>
    )
}