import Link from 'next/link'
import { router } from "next/router"
import { CogIcon, BellIcon, InformationCircleIcon, PlusCircleIcon, LogoutIcon } from '@heroicons/react/outline'

export default function NavbarMySpace() {

    async function signOut() {
        try {
            await Auth.signOut({ global: true });
            router.push('/signup')
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <div id='Navbar'>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 dark:text-white text-blue-500 w-full ">
                <div className="flex flex-wrap justify-between items-center px-12">
                    <a href="https://flowbite.com" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap"> ManageCars </span>
                    </a>
                    <ul className='flex flex-row space-x-8 font-semibold'>
                        <li>Mes trajets</li>
                        <li>Mes réservations</li>
                    </ul>
                    <div className="flex items-center md:order-2 space-x-6">
                        <button className='bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-cyan-500 transition flex flex-row items-center'>
                            <PlusCircleIcon className='h-5 w-5 mr-2' />
                            Publier un trajet
                        </button>
                        <InformationCircleIcon className='h-6 w-6 mr-16' />
                        <Link href='/dashboard/notifications'>
                            <BellIcon className='h-6 w-6 mr-8 ' />
                        </Link>
                        <img className="w-10 h-10 rounded-full" src="https://buffer.com/library/content/images/2020/05/Ash-Read.png" alt="user photo" />
                        <p className='mr-8 ml-8 '> NALIN Brandon </p>
                        <CogIcon className='h-6 w-6' />
                        <button onClick={() => signOut()}>
                            <LogoutIcon className='h-6 w-6' />
                        </button>
                        <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
                            <div className="py-3 px-4">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <ul className="py-1" aria-labelledby="dropdown">
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">

                    </div>
                </div>
            </nav>
        </div>
    )
}