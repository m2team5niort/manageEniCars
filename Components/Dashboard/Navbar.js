// Imports Used
import { Fragment } from "react";
import router from 'next/router'
import Link from 'next/link'
import UserService from "../../service/UserService"
import { AppWrapper, useAppContext } from "../../context/AppContext";
import { Transition, Menu } from '@headlessui/react'
import { LogoutIcon, CogIcon, SearchIcon } from '@heroicons/react/outline'

// Navbar function
export default function Navbar() {

    // signOut function
    function signOut() {
        UserService.signOut()
        router.push('/')
    }

    // User const
    const user = useAppContext(AppWrapper)

    return (
        <>
            {/* Navbar Container */}
            <div className="bg-base-1 text-white w-full p-4">
                <div className="flex flex-row justify-end h-full pr-8">
                    {user &&
                        <>

                            {/* Navbar Content */}
                            <div className="flex flex-row justify-between space-x-12">

                                {/* Searchbox Section */}
                                <div className="flex flex-row items-center relative">
                                    <input type="search" className="bg-base-2 shadow rounded border-0 px-2 py-1 text-white" placeholder="Recherche ..." />
                                    <SearchIcon className="h-4 w-4 text-white absolute top-2 right-4" />
                                </div>

                                {/* User Section (Image + Name) */}
                                <div className="flex justify-between items-center">
                                    <img className="inline object-cover w-8 h-8 rounded-full mr-4" src={user.profilePic != null ? user.profilePic : 'https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png'} alt="Profile image" />
                                    <h3 className="font-normal">{user.name != null ? user.name : user.email}</h3>
                                </div>

                                {/* Separator Section */}
                                <div className="border-r border-white opacity-30"></div>

                                {/* Profile & LogOut Section */}
                                <ul className="flex flex-row items-center space-x-4">
                                    <li className="cursor-pointer">
                                        <Link href={`/dashboard/profile/${user.id}`}>
                                            <a href="#">
                                                <CogIcon className="h-5 w-5 text-white" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="cursor-pointer" onClick={() => signOut()}>
                                        <LogoutIcon className="h-5 w-5 text-white" />
                                    </li>
                                </ul>
                            </div>
                        </>
                    }
                </div>
            </div >
        </>
    );
};
