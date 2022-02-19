// Imports used
import Link from 'next/link'
import { HomeIcon, UserIcon, KeyIcon, ShoppingCartIcon } from '@heroicons/react/outline'

// Sidebar function
export default function Sidebar() {

    return (
        <>
            {/* SideBar Container */}
            <div className="bg-base-1 w-2/12 text-white h-screen px-10">

                {/* Company Logo */}
                <div className='h-12'>
                    <img src='https://zupimages.net/up/22/07/s8r6.png' />
                </div>
                <div className="flex flex-col min-h-custom-dashboard-height pt-14">
                    <div className='mb-14'>
                        <Link href='/dashboard'>
                            <a className='flex flex-row'>
                                <HomeIcon className="h-5 w-5 text-white mr-2" />
                                Dashboard
                            </a>
                        </Link>
                    </div>

                    {/* Action Content */}
                    <div className='space-y-8'>
                        <h3>ACTION</h3>

                        {/* List of Actions */}
                        <ul className="space-y-12 ml-1">

                            {/* Manage Users Section */}
                            <li>
                                <Link href='/dashboard/user'>
                                    <div className='flex flex-row text-white opacity-70 hover:opacity-100 cursor-pointer'>
                                        <UserIcon className="h-5 w-5 mr-2" />
                                        <a className="text-sm rounded-md hover:text-gray-200 focus:outline-none">Gestion utilisateur</a>
                                    </div>
                                </Link>
                            </li>

                            {/* Manage Cars Section */}
                            <li>
                                <Link href='/dashboard/car'>
                                    <div className='flex flex-row text-white opacity-70 hover:opacity-100 cursor-pointer'>
                                        <KeyIcon className="h-5 w-5 mr-2" />
                                        <a className="text-sm rounded-md focus:outline-none">Gestion des voitures</a>
                                    </div>
                                </Link>
                            </li>

                            {/* Manage Reservations Section */}
                            <li>
                                <Link href='/dashboard/reservation'>
                                    <div className='flex flex-row text-white opacity-70 hover:opacity-100 cursor-pointer'>
                                        <ShoppingCartIcon className="h-5 w-5 text-white mr-2" />
                                        <a className="text-sm rounded-md focus:outline-none">Gestion des réservations</a>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
