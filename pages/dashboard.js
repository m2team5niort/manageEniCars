// Imports Used
import React, { useEffect } from 'react'
import Sidebar from '../Components/Dashboard/Sidebar'
import DashboardDispatcher from '../Components/Dashboard/DashboardDispatcher'
import { useAppContext } from '../context/AppContext'

// Dashboard function
export default function dashboard() {

    const user = useAppContext()

    console.log(user)

    return (
        <>
            <div className={`container-dashboard mx-auto`}>
                <Sidebar />
                <DashboardDispatcher user={user} />
            </div>
        </>
    )

}