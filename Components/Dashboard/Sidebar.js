// Imports used
import Link from 'next/link'
import { HomeIcon, UserIcon, KeyIcon, ShoppingCartIcon, XIcon, LogoutIcon, TagIcon, LocationMarkerIcon, TruckIcon } from '@heroicons/react/outline'
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router'


// Sidebar function
export default function Sidebar() {

    const router = useRouter()

    async function signOut() {
        try {
            await Auth.signOut({ global: true });
            router.push('/signup')
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
                <div className="h-24 font-medium">
                    <img className='w-28 rounded-2xl mx-auto mt-12' src="data:image/png;base64,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" />
                    
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
                        <Link href='/dashboard/incidents'>
                            <a>
                                <ShoppingCartIcon className="h-5 w-5" />
                                <span>Gestion incidents</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
