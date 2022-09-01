import Link from 'next/link'
import { router } from "next/router"
import { CogIcon, BellIcon, InformationCircleIcon, PlusCircleIcon, LogoutIcon } from '@heroicons/react/outline'
import { Auth } from 'aws-amplify';

export default function NavbarMySpace({user}) {

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
                <Link href='/dashboard'>
                    <a href="" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap"> ManageCars </span>
                    </a>
                </Link>
                    <div className="flex items-center md:order-2 space-x-6">
                        <p className='mr-8 ml-8 '> {user.email} </p>
                        <button onClick={() => signOut()}>
                            <LogoutIcon className='h-6 w-6' />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}