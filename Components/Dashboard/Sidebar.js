import Link from 'next/link'

export default function Sidebar() {

    return (
        <>
            <div className="bg-blue-600 py-12 px-16 text-white fixed h-full">
                <div className="flex flex-col justify-between h-full">
                    <ul className="space-y-6">
                        <li>
                            <Link href='/dashboard/user'>
                                <a className="text-sm font-medium rounded-md text-white hover:text-gray-200 focus:outline-none">Gestion utilisateur</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/dashboard/reservation'>
                                <a className="text-sm font-medium rounded-md text-white hover:text-gray-200 focus:outline-none">Réservation</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/dashboard/vehicle'>
                                <a className="text-sm font-medium rounded-md text-white hover:text-gray-200 focus:outline-none">Véhicule</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
