// Imports Used
import { API, withSSRContext } from 'aws-amplify'
import React from 'react'
import Sidebar from '../Components/Dashboard/Sidebar'
import Dashboard from '../Components/Dashboard/Dashboard'
import Navbar from '../Components/Dashboard/Navbar'
import { listCars, listModels } from '../graphql/queries'

// Dashboard function

function dashboard({ username, ssrDataDashboard }) {

  return (
    <div className={`container-dashboard mx-auto bg-gray-900`}>
      <Navbar />
      <Sidebar username={username} />
      <Dashboard ssrDataDashboard={ssrDataDashboard} />
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  const { Auth } = withSSRContext({ req })
  try {
    const user = await Auth.currentAuthenticatedUser();

    const apiDataCars = await API.graphql({ query: listCars });
    const apiDataModels = await API.graphql({ query: listModels });

    return {
      props: {
        username: user.username,
        ssrDataDashboard: {
          cars: apiDataCars.data.listCars.items,
          models: apiDataModels.data.listModels.items,
        }
      }
    }

  } catch (err) {
    console.log(err)
    //res.writeHead(302, { Location: '/signup' })
    //res.end()
  }

  return {
    props: {}
  }

}


export default dashboard