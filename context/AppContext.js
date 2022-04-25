import { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '../firebase/useUser';
import UserService from '../service/UserService';

const AppContext = createContext();

export function AppWrapper({ children }) {

    const [isLoading, setLoading] = useState(true)
    const [userFirebaseData, setUserFirebaseData] = useState({})
    const { user, logout } = useUser()

    useEffect(() => {
        if (user) {
            getUserFirebase(user)
            setLoading(true)
        }
    }, [user]);

    async function getUserFirebase(user) {
        await UserService.getUserFirestoreProfile(user).then(res => setUserFirebaseData(res))
    }

    return (
        <>
            {isLoading ?
                <AppContext.Provider value={userFirebaseData}>
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