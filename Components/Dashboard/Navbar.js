// Imports Used

import Link from 'next/link'
import { UserCircleIcon } from '@heroicons/react/solid'
import { LogoutIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { Auth } from 'aws-amplify';
import { router } from "next/router"

// Navbar function
export default function Navbar() {

    async function signOut() {
        try {
            await Auth.signOut({ global: true });
            router.push('/signup')
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (

        <div id="Navbar">
            <nav className="bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 w-full ">
                <div className=" flex flex-wrap justify-between items-center px-12">
                    <a href="/dashboard" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-white"> Dashboard </span>
                    </a>
                    <div className="flex items-center md:order-2">
                    <Link href='/myspace'>
                        <a className='flex items-center'>
                            <UserCircleIcon className="h-5 w-5 text-blue-500 mr-2" />
                            <span className='text-blue-500 text-sm mr-8'> Mon espace </span>
                        </a>
                    </Link>
                    <button onClick={() => signOut()} className="flex items-center">
                        <LogoutIcon className="h-5 w-5 text-white mr-2" />
                        <span className='text-white text-sm'>Se déconnecter</span>
                    </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};
