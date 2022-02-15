import router from 'next/router'
import UserService from "../service/UserService"
import { useUser } from '../firebase/useUser'

export default function Dashboard() {

    function signOut() {
        UserService.signOut()
        router.push('/')
    }

    const { user, logout } = useUser()

    return (
        <>
            <button onClick={() => signOut()} className="block px-3 py-2 rounded-md text-base font-medium w-44 bg-blue-700 text-white hover:bg-blue-900 text-center">Se déconnecter</button>
            {user &&
                <>
                    <h1>Bienvenue {user.name}</h1>
                    <ul className='space-y-4 mt-8'>
                        <li><a href='/dashboard/user' className=" py-2 px-4 text-sm font-medium rounded-md text-white focus:outline-none bg-indigo-600">Gestion utilisateur</a></li>
                        <li><a href='/dashboard/reservation' className=" py-2 px-4 text-sm font-medium rounded-md text-white focus:outline-none bg-indigo-600">Réservation</a></li>
                        <li><a href='/dashboard/vehicle' className=" py-2 px-4 text-sm font-medium rounded-md text-white focus:outline-none bg-indigo-600">Véhicule</a></li>
                        <li><a href='/dashboard/profile' className=" py-2 px-4 text-sm font-medium rounded-md text-white focus:outline-none bg-indigo-600">Profile</a></li>
                    </ul>
                </>
            }
        </>
    )

}