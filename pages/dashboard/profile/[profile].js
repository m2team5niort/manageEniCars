import Profile from '../../../Components/Dashboard/Profile'
import DashboardBase from '../../../Components/Dashboard/DashboardBase'
import firebase from "firebase/app"
import Sidebar from '../../../Components/Dashboard/Sidebar'

export default function profile({ user }) {

    return (
        <div className='flex flex-row'>
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
    });

    return {
        props: {
            user: {
                dataUser: dataUser,
                userId: userId
            }
        }
    }
}
