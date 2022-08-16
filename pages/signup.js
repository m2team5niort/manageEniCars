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
      <h1>Redirection</h1>
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
            <img src='https://images.hdqwalls.com/wallpapers/porsche-taycan-turbo-sportdesign-4k-d4.jpg' />
          </div>
        </div>
      )
  )

}

export default signup;