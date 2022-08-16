import MySpace from "../Components/MySpace/MySpace";
import NavbarMySpace from "../Components/MySpace/NavbarMySpace";
import { API, withSSRContext } from 'aws-amplify'
import { getUser, listCars, listModels } from '../graphql/queries'

function myspace({ssrDataMySpace}) {

    return (
        <>
            <div className={`container-myspace mx-auto`}>
                <NavbarMySpace />
                <MySpace ssrDataMySpace={ssrDataMySpace}/>
            </div>
        </>
    )
}

export async function getServerSideProps({ req, res }) {
    const { Auth } = withSSRContext({ req })
    try {
      const user = await Auth.currentAuthenticatedUser();
  
      const apiDataCars = await API.graphql({ query: listCars });
      const apiDataModels = await API.graphql({ query: listModels });
      const apiDataUser = await API.graphql({ query: getUser, variables: { id: user.username } });
  
      return {
        props: {
          ssrDataMySpace: {
            cars: apiDataCars.data.listCars.items,
            models: apiDataModels.data.listModels.items,
            user: apiDataUser.data.getUser
          }
        }
      }
  
    } catch (err) {
      console.log(err)
    }
  
    return {
      props: {}
    }
  
  }

export default myspace