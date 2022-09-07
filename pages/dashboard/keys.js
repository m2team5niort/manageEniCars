import { API, withSSRContext } from 'aws-amplify'
import React from 'react'
import Key from '../../Components/Dashboard/Key'
import Sidebar from '../../Components/Dashboard/Sidebar'
import Navbar from '../../Components/Dashboard/Navbar'
import { getUser } from '../../graphql/queries'

function keys({ user }) {

  return (
    <div className={`container-crud mx-auto bg-gray-900`}>
      <Navbar user={user}/>
      <Sidebar />
      <Key />
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

export default keys