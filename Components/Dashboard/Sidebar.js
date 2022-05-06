// Imports used
import Link from 'next/link'
import { HomeIcon, UserIcon, KeyIcon, ShoppingCartIcon, XIcon, LogoutIcon, TagIcon, LocationMarkerIcon, TruckIcon } from '@heroicons/react/outline'
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router'


// Sidebar function
export default function Sidebar({ username }) {

    const router = useRouter()

    async function signOut() {
        try {
            await Auth.signOut({ global: true });
            router.push('/dashboard')
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <div id="Sidebar" className="bg-white">
            <div className="aside h-screen relative">
                <div className='text-base-1 mt-6 header-dashboard'>
                    <div className='logo text-center m-auto'>
                        <h2 className='text-2xl font-bold'>ManageCar</h2>

                    </div>

                    <div className='close'>
                        <XIcon className="h-5 w-5 mr-2" />
                    </div>


                </div>
                <div className="h-48 font-medium">
                    <img className='w-28 mx-auto mt-12' src="https://buffer.com/library/content/images/2020/05/Ash-Read.png" />
                    <h1 className=' mx-auto mt-4 text-center'> NALIN Brandon </h1>
                    <h3 className=' mx-auto mt-2 text-center'> Développeur </h3>
                </div>
                <div className="sidebar-dashboard flex flex-col relative top-12 font-medium">
                    <div className='mb-6 mt-2 relative'>
                        <Link href='/dashboard'>
                            <a className='active'>
                                <HomeIcon className="h-5 w-5" />
                                <span>Dashboard</span>
                            </a>
                        </Link>
                        <Link href='/dashboard/users'>
                            <a>
                                <UserIcon className="h-5 w-5" />
                                <span>Gestion utilisateurs</span>
                            </a>
                        </Link>
                        <Link href='/dashboard/models'>
                            <a>
                                <TagIcon className="h-5 w-5" />
                                <span>Gestion modèles</span>
                            </a>
                        </Link>
                        <Link href='/dashboard/locations'>
                            <a>
                                <LocationMarkerIcon className="h-5 w-5" />
                                <span>Gestion lieux</span>
                            </a>
                        </Link>
                        <Link href='/dashboard/cars'>
                            <a>
                                <TruckIcon className="h-5 w-5" />
                                <span>Gestion voitures</span>
                            </a>
                        </Link>
                        <Link href='/dashboard/keys'>
                            <a>
                                <KeyIcon className="h-5 w-5" />
                                <span>Gestion clés</span>
                            </a>
                        </Link>
                        <Link href='/dashboard/reservations'>
                            <a>
                                <ShoppingCartIcon className="h-5 w-5" />
                                <span>Gestion réservations</span>
                            </a>
                        </Link>
                        <button onClick={() => signOut()}>
                            <LogoutIcon className="h-5 w-5" />
                            <span>Se déconnecter</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
