// Imports used
import Link from 'next/link'
import { HomeIcon, UserIcon, KeyIcon, ShoppingCartIcon, XIcon, LogoutIcon, TagIcon, LocationMarkerIcon, TruckIcon, BookOpenIcon, ExclamationCircleIcon } from '@heroicons/react/outline'
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router'


// Sidebar function
export default function Sidebar() {

    const router = useRouter()

    return (
        <div id="Sidebar" className="bg-gray-50">
            <div className="aside h-screen relative">
                <div className='text-base-1 mt-6 header-dashboard'>
                    <div className='logo text-center m-auto'>
                        <h2 className='text-2xl font-bold'>ManageCar</h2>
                    </div>
                    <div className='close'>
                        <XIcon className="h-5 w-5 mr-2" />
                    </div>
                </div>
                <img className='w-20 rounded-2xl mx-auto my-4' src="https://www.eni-service.fr/wordpress/wp-content/uploads/2019/01/logo_ENI_pt.svg" />
                <div className="sidebar-dashboard flex flex-col relative font-normal">
                    <div className='mt-2 relative'>
                        <Link href='/dashboard'>
                            <a className='active'>
                                <HomeIcon className="h-4 w-4" />
                                <span>Dashboard</span>
                            </a>
                        </Link>
                        <Link href='/dashboard/users'>
                            <a>
                                <UserIcon className="h-4 w-4" />
                                <span>Gestion utilisateurs</span>
                            </a>
                        </Link>
                        <Link href='/dashboard/models'>
                            <a>
                                <TagIcon className="h-4 w-4" />
                                <span>Gestion modèles</span>
                            </a>
                        </Link>
                        <Link href='/dashboard/locations'>
                            <a>
                                <LocationMarkerIcon className="h-4 w-4" />
                                <span>Gestion lieux</span>
                            </a>
                        </Link>
                        <Link href='/dashboard/cars'>
                            <a>
                                <TruckIcon className="h-4 w-4" />
                                <span>Gestion voitures</span>
                            </a>
                        </Link>
                        <Link href='/dashboard/keys'>
                            <a>
                                <KeyIcon className="h-4 w-4" />
                                <span>Gestion clés</span>
                            </a>
                        </Link>
                        <Link href='/dashboard/reservations'>
                            <a>
                                <BookOpenIcon className="h-4 w-4" />
                                <span>Gestion réservations</span>
                            </a>
                        </Link>
                        <Link href='/dashboard/incidents'>
                            <a>
                                <ExclamationCircleIcon className="h-4 w-4" />
                                <span>Gestion incidents</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
