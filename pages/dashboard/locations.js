import { withSSRContext } from 'aws-amplify'
import React from 'react'
import Location from '../../Components/Dashboard/Location'
import Sidebar from '../../Components/Dashboard/Sidebar'

function locations({ username }) {

    return (
        <div className={`container-dashboard mx-auto`}>
            <Sidebar />
            <Location username={username} />
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
    return { props: {} }
}


export default locations