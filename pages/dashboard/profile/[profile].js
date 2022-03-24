import firebase from "firebase/app"
import Sidebar from '../../../Components/Dashboard/Sidebar'
import DashboardDispatcher from '../../../Components/Dashboard/DashboardDispatcher';

export default function profile({ user }) {

    return (
        <div className='container-dashboard mx-auto'>
            <Sidebar />
            <DashboardDispatcher user={user} />
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
