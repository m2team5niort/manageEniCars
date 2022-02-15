import router from 'next/router'
import UserService from "../service/UserService"
import { useUser } from '../firebase/useUser'

import Sidebar from '../Components/Dashboard/Sidebar'
import Content from '../Components/Dashboard/Content'

export default function Dashboard() {

    function signOut() {
        UserService.signOut()
        router.push('/')
    }

    const { user, logout } = useUser()

    return (
        <>
            {user &&
                <div className='flex'>
                    <Sidebar />
                    <Content user={user} />
                </div>
            }
        </>
    )

}