import { Auth } from "aws-amplify";
import { router } from "next/router"


export default function MySpace() {

    async function signOut() {
        console.log('ets')
        try {
            await Auth.signOut({ global: true });
            router.push('/signup')
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <>
            <h1>My space</h1>
            <button onClick={() => signOut()}>
                <span>Se déconnecter</span>
            </button>
        </>
    )
}