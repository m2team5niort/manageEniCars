// Imports Used
import React, { useEffect } from 'react'
import Sidebar from '../Components/Dashboard/Sidebar'
import DashboardDispatcher from '../Components/Dashboard/DashboardDispatcher'

// Dashboard function
export default function dashboard() {

    return (
        <>
            <div className={`container-dashboard mx-auto`}>
                <Sidebar />
                <DashboardDispatcher />
            </div>
        </>
    )

}