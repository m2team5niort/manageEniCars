import React, {useState, useEffect} from 'react'
import { API } from 'aws-amplify';
import { listTravels } from '../../../graphql/queries';

export default function ListTravels(){

    const [travels, setTravels] = useState([])

    useEffect(() => {
        fetchTravels();
    }, []);

    
    async function fetchTravels() {
        //const apiData = await API.graphql({ query: listTravels });
        //setTravels(apiData.data.listTravels.items);
    }

    console.log(travels)

    return(
        <>
            {travels && 
                <h2 className="text-4xl text-indigo-800 font-semibold text-center">Liste de mes trajets</h2>
            }
        </>
    )
}