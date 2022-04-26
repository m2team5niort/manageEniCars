// Imports Used
import { withSSRContext } from 'aws-amplify'
import React, { useEffect } from 'react'
import Sidebar from '../Components/Dashboard/Sidebar'
import DashboardDispatcher from '../Components/Dashboard/DashboardDispatcher'

// Dashboard function

function dashboard({ authenticated, username }) {

  if (!authenticated) {
    console.log(username)
    return <h1>Not authenticated</h1>
  }
  return (
    <div className={`container-dashboard mx-auto`}>
        <Sidebar />
        <DashboardDispatcher />
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
    const { Auth } = withSSRContext({ req })
    try {
      const user = await Auth.currentAuthenticatedUser()
      return {
        props: {
          authenticated: true,
          username: user.username
        }
      }
    } catch (err) {
      res.writeHead(302, { Location: '/signup' })
      res.end()
    }
    return {props: {}}
  }
  

export default dashboard