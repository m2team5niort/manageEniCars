import { useState, useEffect } from 'react';

import UserService from "../../service/UserService"
import Toast from '../../Components/Common/Toast'

import firebase from "firebase/app"
import { getStorage, ref } from "firebase/storage";
import Navbar from './Navbar';

export default function Profile({ user }) {

    const [stateText, setStateText] = useState('')
    const [userState, setUserState] = useState({
        lastName: user.dataUser.lastName,
        firstName: user.dataUser.firstName,
        email: user.dataUser.email,
        address: user.dataUser.address,
        city: user.dataUser.city,
        country: user.dataUser.country,
        departement: user.dataUser.departement,
        zip: user.dataUser.zip,
        profilPicture: user.dataUser.profilPicture
    })

    const allInputs = { imgUrl: '' }
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(image)
    }

    const handleChange = (item, e) => {
        let updatedValue = {};
        updatedValue[item] = e.target.value
        setUserState(userState => ({
            ...userState,
            ...updatedValue
        }));
    }

    const [toastState, setToastState] = useState(false)
    const [toastStatus, setToastStatus] = useState()

    const registerUser = async event => {

        event.preventDefault()

        if (imageAsFile !== '') {
            const uploadTask = firebase.storage().ref(`user/images/${user.userId}/${imageAsFile.name}`).put(imageAsFile)
            //initiates the firebase side uploading 
            uploadTask.on('state_changed',
                (snapShot) => {
                    //takes a snap shot of the process as it is happening
                    console.log(snapShot)
                }, (err) => {
                    //catches the errors
                    console.log(err)
                }, () => {
                    // gets the functions from storage refences the image storage in firebase by the children
                    // gets the download url then sets the image from firebase as the value for the imgUrl key:
                    firebase.storage().ref(`user/images/${user.userId}`).child(imageAsFile.name).getDownloadURL()
                        .then(fireBaseUrl => {
                            setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
                        })
                })
        }

        console.log(imageAsUrl)

        let userData = {
            id: user.userId,
            profilPicture: imageAsUrl.imgUrl ? imageAsUrl.imgUrl : userState.profilPicture,
            lastName: userState.lastName,
            firstName: userState.firstName,
            email: userState.email,
            address: userState.address,
            city: userState.city,
            country: userState.country,
            departement: userState.departement,
            zip: userState.zip
        }

        console.log(userData)

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
            setStateText('Modification du profil effectué')
            setToastStatus(1)
        } else {
            setToastState(true)
            setStateText('Problème dans le formulaire')
            setToastStatus(0)
        }
    }

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

                                    <div className="flex flex-row">
                                        <div className="w-1/4 flex justify-center mt-4">
                                            <img className="inline object-cover w-32 h-32 rounded-full" src={userState.profilPicture ? userState.profilPicture : 'https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png'} alt="Profile image" />
                                        </div>
                                        <form onSubmit={registerUser}>
                                            <div className="w-3/4 pr-12">
                                                <div className="grid gap-4 gap-y-6 text-sm grid-cols-1 md:grid-cols-5 text-white">
                                                    <div className="md:col-span-5">
                                                        <label htmlFor="lastName">Nom</label>
                                                        <input onChange={e => handleChange('lastName', e)} defaultValue={userState.lastName || ''} required='required' type="text" name="lastName" id="lastName" placeholder="Nom" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    <div className="md:col-span-5">
                                                        <label htmlFor="firstName">Prénom</label>
                                                        <input onChange={e => handleChange('firstName', e)} defaultValue={userState.firstName || ''} required='required' type="text" name="firstName" id="firstName" placeholder="Prénom" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    <div className="md:col-span-5">
                                                        <label htmlFor="email">Address mail</label>
                                                        <input onChange={e => handleChange('email', e)} defaultValue={userState.email || ''} required='required' type="text" name="mail" id="mail" placeholder="Email" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="email@domain.com" />
                                                    </div>

                                                    <div className="md:col-span-3">
                                                        <label htmlFor="address">Adresse</label>
                                                        <input onChange={e => handleChange('address', e)} defaultValue={userState.address || ''} required='required' type="text" name="address" id="address" placeholder="Adresse" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    <div className="md:col-span-2">
                                                        <label htmlFor="city">Ville</label>
                                                        <input onChange={e => handleChange('city', e)} defaultValue={userState.city || ''} required='required' type="text" name="city" id="city" placeholder="Ville" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    <div className="md:col-span-2">
                                                        <label htmlFor="country">Pays</label>
                                                        <input onChange={e => handleChange('country', e)} defaultValue={userState.country || ''} required='required' name="country" id="country" type="text" placeholder="Pays" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    <div className="md:col-span-2">
                                                        <label htmlFor="departement">Département</label>
                                                        <input onChange={e => handleChange('departement', e)} defaultValue={userState.departement || ''} required='required' name="departement" id="departement" type="number" placeholder="Département" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    <div className="md:col-span-1">
                                                        <label htmlFor="zip">Code postal</label>
                                                        <input onChange={e => handleChange('zip', e)} defaultValue={userState.zip || ''} required='required' type="text" name="zip" id="zip" type="number" placeholder="Code postal" className="bg-base-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    <div className="md:col-span-5">
                                                        <label htmlFor="picture">Photo</label>
                                                        <input onChange={handleImageAsFile} type="file" id="formFile" className="form-control block w-full px-3 py-1 text-base font-normal text-white bg-base-1 border border-gray-300 rounded transition ease-in-out focus:border-blue-600 focus:outline-none" />
                                                    </div>
                                                    <div className="md:col-span-5 text-right">
                                                        <div className="inline-flex items-end">
                                                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Enregistrer</button>
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