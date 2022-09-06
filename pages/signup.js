import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Hub, API } from 'aws-amplify';
import { createUser as createUserMutation } from '../graphql/mutations';

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

  useEffect(() => {
    if (getUserSign) {
      router.push('/dashboard')
    }
  }, [getUserSign])

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
                userInfo.userId !== '' ? createUser(userInfo) : '',
                setUserSign(user)
              )}
            </Authenticator>
            <img src='https://images.caradisiac.com/logos-ref/modele/modele--renault-megane-4/S0-modele--renault-megane-4.jpg' />
          </div>
        </div>
      )
  )

}

export default signup;