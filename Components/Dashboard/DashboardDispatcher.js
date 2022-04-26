// Imports Based
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Dashboard from './Dashboard';
import Profile from './Profile';

// DashboardContent function
export default function DashboardDispatcher() {

    const router = useRouter();
    const url = router.asPath;

    useEffect(() => {
        renderComponent()

    }, [url]);

    const renderComponent = () => {
        switch (url) {
            case '/dashboard/':
                return (<Dashboard />)
            case '/dashboard/profile/':
                return (<Profile />)

        }
    }

    return (
        <>
            {renderComponent()}
        </>
    )

}