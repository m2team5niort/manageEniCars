import { useState, useEffect } from 'react';

import { AppWrapper, useAppContext } from "../../context/AppContext";
import UserService from "../../service/UserService"
import Toast from '../../Components/Common/Toast'

import firebase from "firebase/app"

export default function Profile() {

    const user = useAppContext(AppWrapper)
    const [stateText, setStateText] = useState('')
    const [userState, setUserState] = useState({})
    const [loading, setLoading] = useState(false)

    const [toastState, setToastState] = useState(false)
    const [toastStatus, setToastStatus] = useState()

    const registerUser = async event => {
        event.preventDefault()

        let userData = {
            id: user.id,
            lastName: event.target.lastName.value,
            firstName: event.target.firstName.value,
            mail: event.target.mail.value,
            address: event.target.address.value,
            city: event.target.city.value,
            country: event.target.country.value,
            departement: event.target.departement.value,
            zip: event.target.zip.value
        }

        const res = await fetch(
            '/api/dashboard/profile',
            {
                body: JSON.stringify({
                    userData
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const result = await res.json()

        if (result.status === 200) {
            UserService.setUserFirestoreProfile(userData)
            setToastState(true)
            setStateText('Modification du profil')
            setToastStatus(1)
        } else {
            setToastState(true)
            setStateText('Problème dans le formulaire')
            setToastStatus(0)
        }
    }

    useEffect(() => {
        let docRef = firebase.firestore().collection("User").doc(user.id);
        docRef.get().then(doc => {
            if (doc.exists) {
                setUserState(doc.data());
                setLoading(true)
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
            setLoading(false)
        });
    }, [])

    console.log(userState)

    return (
        <>
            {loading ?
                <>
                    {toastState && <Toast status={toastStatus} stateText={stateText} handleToastState={setToastState} />}
                    <div className="min-h-screen bg-gray-100 ml-64">
                        <div className="flex justify-center bg-gray-100 pt-12">
                            <div className="p-6 bg-gray-100 flex items-center justify-center">
                                <div className="container max-w-screen-lg mx-auto">
                                    <div>
                                        <div className="bg-white rounded-md shadow-sm pb-6">
                                            <div className="pl-12 p-4 border-b border-grey-300 font-medium mb-8 w-full">
                                                Mon profil
                                            </div>

                                            <div className="flex flex-row">
                                                <div className="w-1/4 flex justify-center mt-4">
                                                    <img className="inline object-cover w-32 h-32 rounded-full" src='http://jingculturecommerce.com/wp-content/uploads/2021/11/rtfkt-murakami-clone-x-4-1024x682.jpg' alt="Profile image" />
                                                </div>
                                                <form onSubmit={registerUser}>
                                                    <div className="w-3/4 pr-12">
                                                        <div className="grid gap-4 gap-y-6 text-sm grid-cols-1 md:grid-cols-5">
                                                            <div className="md:col-span-5">
                                                                <label htmlFor="lastName">Nom</label>
                                                                <input onChange={e => setUserState(e.target.value)} value={userState.lastName} type="text" name="lastName" id="lastName" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                            </div>

                                                            <div className="md:col-span-5">
                                                                <label htmlFor="firstName">Prénom</label>
                                                                <input onChange={e => setUserState(e.target.value)} value={userState.firstName} type="text" name="firstName" id="firstName" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                            </div>

                                                            <div className="md:col-span-5">
                                                                <label htmlFor="mail">Address mail</label>
                                                                <input onChange={e => setUserState(e.target.value)} value={userState.mail} type="text" name="mail" id="mail" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="email@domain.com" />
                                                            </div>

                                                            <div className="md:col-span-3">
                                                                <label htmlFor="address">Adresse</label>
                                                                <input onChange={e => setUserState(e.target.value)} value={userState.address} type="text" name="address" id="address" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="" />
                                                            </div>

                                                            <div className="md:col-span-2">
                                                                <label htmlFor="city">Ville</label>
                                                                <input onChange={e => setUserState(e.target.value)} value={userState.city} type="text" name="city" id="city" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="" />
                                                            </div>

                                                            <div className="md:col-span-2">
                                                                <label htmlFor="country">Pays</label>
                                                                <input onChange={e => setUserState(e.target.value)} value={userState.country} name="country" id="country" placeholder="Pays" type="text" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                            </div>

                                                            <div className="md:col-span-2">
                                                                <label htmlFor="departement">Département</label>
                                                                <input onChange={e => setUserState(e.target.value)} value={userState.departement} name="departement" id="departement" type="number" placeholder="Département" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                            </div>

                                                            <div className="md:col-span-1">
                                                                <label htmlFor="zip">Code postal</label>
                                                                <input onChange={e => setUserState(e.target.value)} value={userState.zip} type="text" name="zip" id="zip" type="number" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="" />
                                                            </div>

                                                            <div className="md:col-span-5 text-right">
                                                                <div className="inline-flex items-end">
                                                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enregistrer</button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                </>
                :
                <></>
            }
        </>
    )
}