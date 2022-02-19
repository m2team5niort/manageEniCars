import { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '../firebase/useUser'
import { useRouter } from 'next/router'

const AppContext = createContext();

export function AppWrapper({ children }) {

    const [loading, setLoading] = useState(false)
    const { user, logout } = useUser()
    const router = useRouter()


    useEffect(() => {
        if (!router.pathname.includes('dashboard')) {
            setLoading(true)
        }
    }, []);


    useEffect(() => {
        if (user && router.pathname.includes('dashboard')) {
            setLoading(true)
        }
    }, [user]);

    return (
        <>
            {loading ?
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