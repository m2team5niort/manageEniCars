import Profile from '../../../Components/Dashboard/Profile'
import DashboardBase from '../../../Components/Dashboard/DashboardBase'
import firebase from "firebase/app"

export default function profile({ user }) {

    console.log(user)

    return (
        <>
            <DashboardBase />
            <Profile user={user} />
        </>
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
