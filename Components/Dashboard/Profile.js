// Imports used
import { useState, useEffect } from 'react';
import UserService from "../../service/UserService"
import Toast from '../../Components/Common/Toast'
import firebase from "firebase/app"
import Navbar from './Navbar';

// Profile function
// Parameter : user
export default function Profile({ user }) {

    // Consts used
    const [stateText, setStateText] = useState('')
    const [userState, setUserState] = useState(user.dataUser)
    const [toastState, setToastState] = useState(false)
    const [toastStatus, setToastStatus] = useState()

    // Register User to get Data
    const registerUser = async event => {
        event.preventDefault()

        // userData
        let userData = {
            id: user.userId,
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
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }, [])

    return (
        <div className="flex flex-col w-10/12 bg-base-1">
            <Navbar />
            {toastState && <Toast status={toastStatus} stateText={stateText} handleToastState={setToastState} />}
            <div className="min-h-custom-dashboard-height h-full">
                <div className="flex justify-center pt-12 ">
                    <div className="p-6 flex items-center justify-center">
                        <div className="container max-w-screen-lg mx-auto">
                            <div>
                                <div className="bg-base-2 rounded-md shadow-sm pb-6">
                                    <div className="pl-12 p-4 border-b border-grey-300 font-medium mb-8 w-full text-white">
                                        Mon profil
                                    </div>

                                    {/* User Data Section */}
                                    <div className="flex flex-row">

                                        {/* Image User */}
                                        <div className="w-1/4 flex justify-center mt-4">
                                            <img className="inline object-cover w-32 h-32 rounded-full" src='http://jingculturecommerce.com/wp-content/uploads/2021/11/rtfkt-murakami-clone-x-4-1024x682.jpg' alt="Profile image" />
                                        </div>

                                        {/* Form User */}
                                        <form onSubmit={registerUser}>
                                            <div className="w-3/4 pr-12">
                                                <div className="grid gap-4 gap-y-6 text-sm grid-cols-1 md:grid-cols-5 text-white">
                                                    <div className="md:col-span-5">
                                                        <label htmlFor="lastName">Nom</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.lastName} type="text" name="lastName" id="lastName" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    {/* Last Name */}
                                                    <div className="md:col-span-5">
                                                        <label htmlFor="firstName">Prénom</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.firstName} type="text" name="firstName" id="firstName" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    {/* Email Address */}
                                                    <div className="md:col-span-5">
                                                        <label htmlFor="mail">Address mail</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.mail} type="text" name="mail" id="mail" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="email@domain.com" />
                                                    </div>

                                                    {/* Address */}
                                                    <div className="md:col-span-3">
                                                        <label htmlFor="address">Adresse</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.address} type="text" name="address" id="address" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="" />
                                                    </div>

                                                    {/* City */}
                                                    <div className="md:col-span-2">
                                                        <label htmlFor="city">Ville</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.city} type="text" name="city" id="city" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="" />
                                                    </div>

                                                    {/* Country */}
                                                    <div className="md:col-span-2">
                                                        <label htmlFor="country">Pays</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.country} name="country" id="country" placeholder="Pays" type="text" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    {/* Department */}
                                                    <div className="md:col-span-2">
                                                        <label htmlFor="departement">Département</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.departement} name="departement" id="departement" type="number" placeholder="Département" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    {/* Zip Code */}
                                                    <div className="md:col-span-1">
                                                        <label htmlFor="zip">Code postal</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.zip} type="text" name="zip" id="zip" type="number" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="" />
                                                    </div>

                                                    {/* Save */}
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
        </div>
    )
}