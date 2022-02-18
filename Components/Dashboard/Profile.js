// Imports used
import { useState } from 'react';
import Toast from '../../Components/Common/Toast'
import Navbar from './Navbar';

// Profile function
// Parameter : user
export default function Profile() {

    /*

    // Consts used
    const [stateText, setStateText] = useState('')
    const [userState, setUserState] = useState({
        lastName: user.lastName,
        firstName: user.firstName,
        email: user.email,
        address: user.address,
        city: user.city,
        country: user.country,
        departement: user.departement,
        zip: user.zip,
        profilPicture: user.profilPicture,
        id: user.id
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

    // Register User to get Data
    const registerUser = async event => {

        event.preventDefault()

        if (imageAsFile !== '') {
            return new Promise((resolve, reject) => {
                const uploadTask = firebase.storage().ref(`user/images/${user.id}/${imageAsFile.name}`).put(imageAsFile)
                //initiates the firebase side uploading 
                uploadTask.on('state_changed',
                    (snapShot) => {
                        //takes a snap shot of the process as it is happening
                        console.log(snapShot);
                    }, (err) => {
                        //catches the errors
                        console.log(err);
                        reject();
                    }, () => {
                        // gets the functions from storage refences the image storage in firebase by the children
                        // gets the download url then sets the image from firebase as the value for the imgUrl key:
                        firebase.storage().ref(`user/images/${user.id}`).child(imageAsFile.name).getDownloadURL()
                            .then(fireBaseUrl => {
                                setImageAsUrl(fireBaseUrl)
                                setUserState(prevObject => ({ ...prevObject, profilPicture: fireBaseUrl }))
                                resolve(fireBaseUrl)
                            })
                    })
            }).then((res) => {
                setUserData(res)
            })
        }
        else {
            setUserData()
        }

        async function setUserData(image = userState.profilPicture) {
            let userData = {
                id: user.id,
                profilPicture: image,
                lastName: userState.lastName,
                firstName: userState.firstName,
                email: userState.email,
                address: userState.address,
                city: userState.city,
                country: userState.country,
                departement: userState.departement,
                zip: userState.zip
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
                setToastState(true)
                setStateText('Modification du profil effectué')
                setToastStatus(1)
            } else {
                setToastState(true)
                setStateText('Problème dans le formulaire')
                setToastStatus(0)
            }
        }
    }

    */

    return (
        <>
<<<<<<< HEAD
        
=======
            {toastState && <Toast status={toastStatus} stateText={stateText} handleToastState={setToastState} />}

            {/* Profile Container */}
            <div className="min-h-screen bg-gray-100 ml-64">
                <div className="flex justify-center bg-gray-100 pt-12 ">
                    <div className="p-6 bg-gray-100 flex items-center justify-center">
                        <div className="container max-w-screen-lg mx-auto">
                            <div>
                                {/* Profile Content */}
                                <div className="bg-white rounded-md shadow-sm pb-6">

                                    {/* Title */}
                                    <div className="pl-12 p-4 border-b border-grey-300 font-medium mb-8 w-full">
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
                                                <div className="grid gap-4 gap-y-6 text-sm grid-cols-1 md:grid-cols-5">

                                                    {/* First Name */}
                                                    <div className="md:col-span-5">
                                                        <label htmlFor="lastName">Nom</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.lastName} type="text" name="lastName" id="lastName" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    {/* Last Name */}
                                                    <div className="md:col-span-5">
                                                        <label htmlFor="firstName">Prénom</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.firstName} type="text" name="firstName" id="firstName" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    {/* Email Address */}
                                                    <div className="md:col-span-5">
                                                        <label htmlFor="mail">Address mail</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.mail} type="text" name="mail" id="mail" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="email@domain.com" />
                                                    </div>

                                                    {/* Address */}
                                                    <div className="md:col-span-3">
                                                        <label htmlFor="address">Adresse</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.address} type="text" name="address" id="address" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="" />
                                                    </div>

                                                    {/* City */}
                                                    <div className="md:col-span-2">
                                                        <label htmlFor="city">Ville</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.city} type="text" name="city" id="city" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="" />
                                                    </div>

                                                    {/* Country */}
                                                    <div className="md:col-span-2">
                                                        <label htmlFor="country">Pays</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.country} name="country" id="country" placeholder="Pays" type="text" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    {/* Department */}
                                                    <div className="md:col-span-2">
                                                        <label htmlFor="departement">Département</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.departement} name="departement" id="departement" type="number" placeholder="Département" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                                    </div>

                                                    {/* Zip Code */}
                                                    <div className="md:col-span-1">
                                                        <label htmlFor="zip">Code postal</label>
                                                        <input onChange={e => setUserState(e.target.value)} value={userState.zip} type="text" name="zip" id="zip" type="number" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="" />
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
>>>>>>> e0cfe2f (Global Comments V1)
        </>
    )
}