import { withSSRContext } from 'aws-amplify'
import React from 'react'
<<<<<<< HEAD
import Sidebar from '../../Components/Dashboard/Sidebar'
import Navbar from '../../Components/Dashboard/Navbar'
import Reservation from '../../Components/Dashboard/Reservation'

function reservations({ username }) {

    return (
        <div className={`container-dashboard mx-auto bg-gray-900`}>
            <Navbar />
            <Sidebar />
            <Reservation username={username} />
        </div>
    )
}

export async function getServerSideProps({ req, res }) {
    const { Auth } = withSSRContext({ req })
    try {
        const user = await Auth.currentAuthenticatedUser()
        return {
            props: {
                username: user.username,
            }
        }
    } catch (err) {
        res.writeHead(302, { Location: '/signup' })
        res.end()
    }
    return { props: {} }
=======
import Reservation from '../../Components/Dashboard/Reservation'
import Navbar from '../../Components/Dashboard/Navbar'
import Sidebar from '../../Components/Dashboard/Sidebar'

function reservations({ username }) {

  return (
    <div className={`container-dashboard mx-auto bg-gray-900`}>
      <Navbar />
      <Sidebar />
      <Reservation username={username} />
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  const { Auth } = withSSRContext({ req })
  try {
    const user = await Auth.currentAuthenticatedUser()
    return {
      props: {
        username: user.username,
      }
    }
  } catch (err) {
    res.writeHead(302, { Location: '/signup' })
    res.end()
  }
  return { props: {} }
>>>>>>> a462f16 (Modifications Notifications Page -> Adding icons for actions)
}


export default reservations