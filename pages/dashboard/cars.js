import { withSSRContext } from 'aws-amplify'
import React from 'react'
import Car from '../../Components/Dashboard/Car'
import Sidebar from '../../Components/Dashboard/Sidebar'

const initialFormState = { name: '', description: '' }


// Dashboard function

function cars({ username }) {

  return (
    <div className={`container-dashboard mx-auto`}>
        <Sidebar />
        <Car username={username}/>
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
  

export default cars