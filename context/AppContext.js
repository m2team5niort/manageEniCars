import { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '../firebase/useUser'

const AppContext = createContext();

export function AppWrapper({ children }) {

    const [loading, setLoading] = useState(false)
    const { user, logout } = useUser()

    useEffect(() => {
        if (user) {
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