// Imports Used
import { withSSRContext } from 'aws-amplify'
import React, { useEffect } from 'react'
import Sidebar from '../Components/Dashboard/Sidebar'
import Dashboard from '../Components/Dashboard/Dashboard'

// Dashboard function

function dashboard({ username }) {

  return (
    <div className={`container-dashboard mx-auto`}>
        <Sidebar />
        <Dashboard username={username}/>
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
    return {props: {}}
  }
  

export default dashboard