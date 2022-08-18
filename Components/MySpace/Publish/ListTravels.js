import React, {useState, useEffect} from 'react'
import { API } from 'aws-amplify';
import { listTravels, getTravel } from '../../../graphql/queries';
import { deleteTravel as deleteTravelMutation, updateTravel as updateTravelMutation } from '../../../graphql/mutations';
import ModalTravel from './Modals/ModalTravel';

export default function ListTravels(){

    const [travels, setTravels] = useState([])
    const [modalDisplay, setModalDisplay] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        fetchTravels();
    }, []);

    
    async function fetchTravels() {
        await API.graphql({ query: listTravels }).then((res => {
            res.data.listTravels.items.forEach(element => {
                fetchTravel(element.id)
            });
        }));
    }

    async function fetchTravel(idTravel){
        let travelsArray = []
        const apiData = await API.graphql({ query: getTravel, variables: { id: idTravel } });
        travelsArray.push(apiData.data.getTravel)
        setTravels(travelsArray)
    }

    async function deleteTravel({ id }) {
        const newCarsArray = travels.filter(travel => travel.id !== id);
        setTravels(newCarsArray);
        await API.graphql({ query: deleteTravelMutation, variables: { input: { id } } });
    }

    const handleModal = (travel) => {
        setData(travel)
        setModalDisplay(!modalDisplay)
    }

    console.log(travels)

    return(
        <>
            {travels &&
                <>
                   <h2 className="text-4xl text-indigo-800 font-semibold text-center">Liste de mes trajets à venir</h2>
                    {travels.map((travel => {
                            return (
                                <div onClick={() => handleModal(travel)} className='flex flex-row space-x-2 items-center bg-sky-400 shadow-2xl p-8 rounded-md cursor-pointer'>
                                    <h1>Nom du conducteur : {travel.driver.email}</h1>
                                    <p>Voiture : {travel.car.name}</p>
                                    <p>Places : {travel.places}</p>
                                    <button onClick={() => deleteTravel(travel)} className='px-6 py-2 bg-indigo-800 rounded-md text-white'>Supprimer</button>
                                </div>
                            )
                        }
                    ))}
                    { modalDisplay && <ModalTravel setModalDisplay={setModalDisplay} data={data} /> }
                </>
            }        
        </>
    )
}