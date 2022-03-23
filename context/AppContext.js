import { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '../firebase/useUser'
import { useRouter } from 'next/router'

const AppContext = createContext();

export function AppWrapper({ children }) {

    const [isLoading, setLoading] = useState(false)
    const { user, logout } = useUser()

    useEffect(() => {
        setLoading(true)
    }, [user]);

    return (
        <>
            {isLoading ?
                <AppContext.Provider value={user}>
                    {children}
                </AppContext.Provider>
                :
                <></>
            }
        </>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}