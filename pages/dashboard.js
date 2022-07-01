// Imports Used
import { withSSRContext } from 'aws-amplify'
import React from 'react'
import Sidebar from '../Components/Dashboard/Sidebar'
import Dashboard from '../Components/Dashboard/Dashboard'
import Navbar from '../Components/Dashboard/Navbar'

// Dashboard function

function dashboard({ username }) {

  return (
    <div className={`container-dashboard mx-auto bg-gray-900`}>
      <Navbar />
      <Sidebar />
      <Dashboard username={username} />
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  const { Auth } = withSSRContext({ req })
  try {
    const user = await Auth.currentAuthenticatedUser();

    return {
      props: {
          username: user.username
      }
    }

  } catch (err) {
    res.writeHead(302, { Location: '/signup' })
    res.end()
  }

  return {
    props: {}
  }

}


export default dashboard