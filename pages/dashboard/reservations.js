import { API, withSSRContext } from 'aws-amplify'
import React from 'react'
import Sidebar from '../../Components/Dashboard/Sidebar'
import Navbar from '../../Components/Dashboard/Navbar'
import Reservation from '../../Components/Dashboard/Reservation'
import { getUser } from '../../graphql/queries'

function reservations({ user }) {

  return (
    <div className={`container-dashboard mx-auto bg-gray-900`}>
      <Navbar user={user}/>
      <Sidebar />
      <Reservation />
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

export default reservations