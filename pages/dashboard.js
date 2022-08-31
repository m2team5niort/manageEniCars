// Imports Used
import { API, withSSRContext } from 'aws-amplify'
import React from 'react'
import Sidebar from '../Components/Dashboard/Sidebar'
import Dashboard from '../Components/Dashboard/Dashboard'
import Navbar from '../Components/Dashboard/Navbar'
import { listCars, listModels, getUser, listTravels } from '../graphql/queries'

// Dashboard function

function dashboard({ ssrDataDashboard }) {

  console.log(ssrDataDashboard)

  return (
    <div className={`container-dashboard mx-auto bg-gray-900`}>
      <Navbar />
      <Sidebar ssrDataDashboard={ssrDataDashboard}/>
      <Dashboard ssrDataDashboard={ssrDataDashboard} />
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  const { Auth } = withSSRContext({ req })
  try {
    const user = await Auth.currentAuthenticatedUser();

    let id = user.username

    const apiDataCars = await API.graphql({ query: listCars });
    const apiDataModels = await API.graphql({ query: listModels });
    const apiDataTravels = await API.graphql({ query: listTravels});
    const apiDataUser = await API.graphql({ query: getUser, variables: { id } });

    console.log(apiDataUser)

    if (!apiDataUser.data.getUser.isAdmin) {
      res.writeHead(302, { Location: '/myspace' })
      res.end()
    }

    return {
      props: {
        ssrDataDashboard: {
          cars: apiDataCars.data.listCars.items,
          models: apiDataModels.data.listModels.items,
          travels: apiDataTravels.data.listTravels.items,
          user: apiDataUser.data.getUser
        }
      }
    }

  } catch (err) {
    console.log(err)
    res.writeHead(302, { Location: '/signup' })
    res.end()
  }

  return {
    props: {}
  }

}


export default dashboard