// Imports Used
import React from 'react'
import Sidebar from '../Components/Dashboard/Sidebar'
import DashboardDispatcher from '../Components/Dashboard/DashboardDispatcher'
import { useAppContext } from '../context/AppContext'

// Dashboard function
export default function dashboard() {

    const user = useAppContext()

    return (
        <>
            <div className='container-dashboard mx-auto'>
                <Sidebar />
                <DashboardDispatcher user={user} />
            </div>
        </>
    )

}