import { createContext, useContext, useState } from 'react';
import { useUser } from '../firebase/useUser'

const AppContext = createContext();

export function AppWrapper({ children }) {

    const [isLoading, setLoading] = useState(true)
    const { user, logout } = useUser()

    return (
        <>
            <AppContext.Provider value={{ user, isLoading }}>
                {children}
            </AppContext.Provider>
        </>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}