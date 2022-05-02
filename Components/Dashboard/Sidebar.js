// Imports used
import Link from 'next/link'
import { HomeIcon, UserIcon, KeyIcon, ShoppingCartIcon, XIcon, LogoutIcon, TagIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router'


// Sidebar function
export default function Sidebar() {

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
        <>
            <div className="aside h-screen">
                <div className='text-base-1 mt-6 header-dashboard'>
                    <div className='logo text-center m-auto'>
                        <h2 className='text-2xl font-bold'>ManageCar</h2>
                    </div>
                    <div className='close'>
                        <XIcon className="h-5 w-5 mr-2" />
                    </div>
                </div>
                <div className="sidebar-dashboard flex flex-col relative top-12 font-medium">
                    <div className='mb-6'>
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
                                <KeyIcon className="h-5 w-5" />
                                <span>Gestion voitures</span>
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
                            <span >Se déconnecter</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
