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
        
        </>
    )
}