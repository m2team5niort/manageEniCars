import router from 'next/router'
import UserService from "../service/UserService"
import { useUser } from '../firebase/useUser'

export default function Dashboard() {

    function signOut() {
        UserService.signOut()
        router.push('/')
    }

    const { user, logout } = useUser()

    console.log(user)

    return (
        <>
            <button onClick={() => signOut()} className="block px-3 py-2 rounded-md text-base font-medium w-44 bg-blue-700 text-white hover:bg-blue-900 text-center">Se déconnecter</button>
            {user &&
                <>
                    <h1>Bienvenue {user.name}</h1>
                </>
            }
        </>
    )

}