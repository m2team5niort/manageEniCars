import Sidebar from '../../../Components/Dashboard/Sidebar'
import Profile from "../../../Components/Dashboard/Profile";
import { withSSRContext } from 'aws-amplify'

export default function profile({ user }) {

    return (
        <div className='container-dashboard mx-auto'>
            <Sidebar />
            <Profile user={user} />
        </div>
    )
}

export async function getServerSideProps({ req, res }) {

    const { Auth } = withSSRContext({ req })

    try {
      const user = await Auth.currentAuthenticatedUser()
      return {
        props: {
          user: user.username,
        }
      }
    } catch (err) {
      res.writeHead(302, { Location: '/signup' })
      res.end()
    }
    return {props: {}}
}
