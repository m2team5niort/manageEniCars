import { API, withSSRContext } from 'aws-amplify'
import React from 'react'
import Location from '../../Components/Dashboard/Location/Location'
import Navbar from '../../Components/Dashboard/Navbar'
import Sidebar from '../../Components/Dashboard/Sidebar'
import { getUser } from '../../graphql/queries'

function locations({ user }) {

    return (
        <div className={`container-crud mx-auto bg-gray-900`}>
            <Navbar user={user}/>
            <Sidebar />
            <Location />
        </div>
    )
}

export async function getServerSideProps({ req, res }) {
    const { Auth } = withSSRContext({ req })
  try {
    const user = await Auth.currentAuthenticatedUser();

    let id = user.username
    const apiDataUser = await API.graphql({ query: getUser, variables: { id } });

    return {

      props: {
        user: apiDataUser.data.getUser
      }

    }
    } catch (err) {
        console.log(err)
        res.writeHead(302, { Location: '/signup' })
        res.end()
    }
    return { props: {} }
}


export default locations