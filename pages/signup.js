import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Hub, API, withSSRContext } from 'aws-amplify';
import { createUser as createUserMutation } from '../graphql/mutations';
import { getUser } from '../graphql/queries'

function signup() {

  const router = useRouter()
  const [getUserSign, setUserSign] = useState()
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userEmail: ''
  })

  Hub.listen('auth', (data) => {
    if (data.payload.event === 'signUp') {
      setUserInfo({
        userId: data.payload.data.userSub,
        userEmail: data.payload.data.user.username
      })
    }
  });

  async function createUser({ userId, userEmail }) {
    const formData = { email: userEmail, id: userId, isAdmin: false }
    await API.graphql({ query: createUserMutation, variables: { input: formData } });
  }

  console.log(getUserSign)

  return (
    getUserSign ? (
      <div className='flex flex-col bg-gray-900 h-screen justify-center items-center space-y-6'>
        <img className='w-20 rounded-2xl mx-auto animate-pulse' src="https://www.eni-service.fr/wordpress/wp-content/uploads/2019/01/logo_ENI_pt.svg" />
        <h1 className='text-white text-2xl'>Redirection en cours...</h1>
      </div>
    )
      :
      (
        <div className='signup-container'>
          <div className='flex-signup'>
            <Authenticator>
              {({ user }) => (
                  setUserSign(user)
              )}
            </Authenticator>
            <img src='https://images.caradisiac.com/logos-ref/modele/modele--renault-megane-4/S0-modele--renault-megane-4.jpg' />
          </div>
        </div>
      )
  )

}

export async function getServerSideProps({ req, res }) {
  const { Auth } = withSSRContext({ req })

  try {
    const user = await Auth.currentAuthenticatedUser();

    let id = user.username
    const apiDataUser = await API.graphql({ query: getUser, variables: { id } });

    if (!apiDataUser.data.getUser.isAdmin) {
      res.writeHead(302, { Location: '/myspace' })
      res.end()
    }else{
      res.writeHead(302, { Location: '/dashboard' })
      res.end()
    }

    return {
      props: {}
    }

  }
  catch(err){
    console.log(err)
  }

  return {
    props: {}
  }

}

export default signup;