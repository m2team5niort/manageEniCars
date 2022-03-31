import firebase from "firebase/app"
import Sidebar from '../../../Components/Dashboard/Sidebar'
import Profile from "../../../Components/Dashboard/Profile";

export default function profile({ user }) {

    return (
        <div className='container-dashboard mx-auto'>
            <Sidebar />
            <Profile user={user} />
        </div>
    )
}

export async function getServerSideProps(context) {

    const userId = context.params['profile'];

    let dataUser
    await firebase.firestore().collection("User").doc(userId).get().then(doc => {
        dataUser = doc.data();
        dataUser['id'] = userId
    });

    return {
        props: {
            user: dataUser
        }
    }
}
