// Imports Based
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Dashboard from './Dashboard';
import Profile from './Profile';
import { useAppContext } from '../../context/AppContext';

// DashboardContent function
export default function DashboardDispatcher({ user }) {

    const router = useRouter();
    const url = router.asPath;

    useEffect(() => {
        renderComponent()

    }, [url]);

    console.log(user)

    const renderComponent = () => {
        switch (url) {
            case '/dashboard/':
                return (<Dashboard user={user} />)
            case '/dashboard/profile/CG0tGkd6IMXvQ2FQJvHkmuwQte03/':
                return (<Profile user={user} />)

        }
    }

    return (
        <>
            {renderComponent()}
        </>
    )

}