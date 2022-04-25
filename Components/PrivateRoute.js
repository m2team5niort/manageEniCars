import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from '../context/AppContext';
import FullPageLoader from '../Components/Common/FullPageLoader'

export default function PrivateRoute({ protectedRoutes, children }) {
    const router = useRouter();

    const url = router.asPath;
    const pathIsProtected = url.includes(protectedRoutes)

    const user = useAppContext()

    useEffect(() => {
        console.log(user.id)
        if (pathIsProtected) {
            if (!user) {
                return;
            }
            else {
                router.push('/signin');
            }
        }

    }, [pathIsProtected, user]);


    if (pathIsProtected && !user) {
        console.log(user, pathIsProtected)
        return <FullPageLoader />;
    }

    return children;
}