import { Fragment } from "react";
import router from 'next/router'
import Link from 'next/link'
import UserService from "../../service/UserService"
import { Transition, Menu } from '@headlessui/react'
import { AppWrapper, useAppContext } from "../../context/AppContext";

export default function Navbar() {

    function signOut() {
        UserService.signOut()
        router.push('/')
    }

    const user = useAppContext(AppWrapper)

    return (
        <>
            <div className="bg-blue-600 text-white w-full p-2">
                <div className="flex flex-row justify-end h-full pr-8">
                    {user &&
                        <>
                            <Menu as="div" className="inline-block text-left leading-none">
                                <div>
                                    <Menu.Button>
                                        <div className="flex justify-between items-center">
                                            <img className="inline object-cover w-8 h-8 rounded-full mr-4" src={user.profilePic != null ? user.profilePic : 'https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png'} alt="Profile image" />
                                            <h3 className="font-semibold">{user.name != null ? user.name : user.email}</h3>
                                        </div>
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute top-16 right-10 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                <Link href='/dashboard/profile'>
                                                    <a className='bg-white hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm'>Mon profil</a>
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <a
                                                    href="#"
                                                    className='bg-white hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm'
                                                >
                                                    Aide
                                                </a>
                                            </Menu.Item>
                                        </div>
                                        <div className="py-1">
                                            <Menu.Item>
                                                <button
                                                    onClick={() => signOut()}
                                                    className='bg-white hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm w-full text-left'
                                                >
                                                    Se déconnecter
                                                </button>
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>

                                </Transition >
                            </Menu >
                        </>
                    }
                </div>
            </div>
        </>
    );
};
