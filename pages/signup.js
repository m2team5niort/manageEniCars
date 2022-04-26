import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function signup(){
  
  const router = useRouter()
  const[getUserSign, setUserSign] = useState()

  useEffect(() => {
    if(getUserSign){
      router.push('/dashboard')
    }
  }, [getUserSign])

  return(
    getUserSign ? (
      <h1>Redirection</h1>
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
        <img src='https://images.hdqwalls.com/wallpapers/porsche-taycan-turbo-sportdesign-4k-d4.jpg' />
      </div>
    </div>
    )
  )

}

export default signup;