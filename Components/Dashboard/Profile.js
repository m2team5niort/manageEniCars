// Imports used
import { useState } from 'react';
import Toast from '../../Components/Common/Toast'
import Navbar from './Navbar';

// Profile function
// Parameter : user
export default function Profile() {

    // Consts used
    const [stateText, setStateText] = useState('')
    const [userState, setUserState] = useState({
        /*
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
        */
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

        /*

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
        */
    }

    return (
        <>
            <main>
                {toastState && <Toast status={toastStatus} stateText={stateText} handleToastState={setToastState} />}
                <div className='w-10/12 ml-auto'>
                    <h1 className="text-3xl font-bold mb-10">Mon profil</h1>
                    <div className="bg-white rounded-md shadow-xl pb-6 text-black">
                        <div className="pl-12 p-4 border-b border-grey-300 font-medium mb-8 w-full">
                            Mon profil
                        </div>
                        {/* User Data Section */}
                        <div className="flex flex-row">

                            {/* Image User */}
                            <div className="w-1/4 flex justify-center mt-4 mx-auto">
                                <img className="inline object-cover w-32 h-32 rounded-full" src={'https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png'} alt="Profile image" />
                            </div>

                            {/* Form User */}
                            <form className="w-3/4 mx-auto px-16" onSubmit={registerUser}>
                                <div className="flex flex-col text-sm space-y-4">
                                    <div className='flex w-full space-x-4'>
                                        <div className='w-full space-y-2'>
                                            <label htmlFor="lastName">Nom</label>
                                            <input onChange={e => handleChange('lastName', e)} defaultValue={''} required='required' type="text" name="lastName" id="lastName" placeholder="Nom" className="w-full bg-gray-200 appearance-none relative block  px-3 py-2 placeholder-gray-500 text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                        </div>

                                        {/* Last Name */}
                                        <div className='w-full space-y-2'>
                                            <label htmlFor="firstName">Prénom</label>
                                            <input onChange={e => handleChange('firstName', e)} defaultValue={''} required='required' type="text" name="firstName" id="firstName" placeholder="Prénom" className="w-full bg-gray-200 appearance-none relative block px-3 py-2 placeholder-gray-500 text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                        </div>
                                    </div>

                                    {/* Email Address */}
                                    <div className="w-full space-y-2">
                                        <label htmlFor="email">Address mail</label>
                                        <input onChange={e => handleChange('email', e)} defaultValue={''} required='required' type="text" name="mail" id="mail" className="bg-gray-200 appearance-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="email@domain.com" />
                                    </div>

                                    <div className='flex w-full space-x-4'>
                                        {/* Address */}
                                        <div className="w-full space-y-2">
                                            <label htmlFor="address">Adresse</label>
                                            <input onChange={e => handleChange('address', e)} defaultValue={''} required='required' type="text" name="address" id="address" placeholder="Adresse" className="bg-gray-200 appearance-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                        </div>

                                        {/* City */}
                                        <div className="w-full space-y-2">
                                            <label htmlFor="city">Ville</label>
                                            <input onChange={e => handleChange('city', e)} defaultValue={''} required='required' type="text" name="city" id="city" placeholder="Ville" className="bg-gray-200 appearance-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                        </div>
                                    </div>

                                    {/* Country */}
                                    <div className="w-full space-y-2">
                                        <label htmlFor="country">Pays</label>
                                        <input onChange={e => handleChange('country', e)} defaultValue={''} required='required' name="country" id="country" type="text" placeholder="Pays" className="bg-gray-200 appearance-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                    </div>

                                    <div className='flex w-full space-x-4'>
                                        {/* Department */}
                                        <div className="w-full space-y-2">
                                            <label htmlFor="departement">Département</label>
                                            <input onChange={e => handleChange('departement', e)} defaultValue={''} required='required' name="departement" id="departement" type="number" placeholder="Département" className="bg-gray-200 appearance-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                        </div>

                                        {/* Zip Code */}
                                        <div className="w-full space-y-2">
                                            <label htmlFor="zip">Code postal</label>
                                            <input onChange={e => handleChange('zip', e)} defaultValue={''} required='required' name="zip" id="zip" type="number" placeholder="Code postal" className="bg-gray-200 appearance-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                        </div>
                                    </div>

                                    {/* Upload Picture */}
                                    <div className="w-full space-y-2">
                                        <label htmlFor="picture">Photo</label>
                                        <input onChange={handleImageAsFile || imageAsUrl} type="file" id="formFile" className="form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-gray-200 rounded transition ease-in-out focus:border-blue-600 focus:outline-none" />
                                    </div>

                                    {/* Save */}
                                    <div className="md:col-span-5 text-right">
                                        <div className="inline-flex items-end">
                                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Enregistrer</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <div className="right-section">
                <Navbar />
            </div>
        </>
    )
}