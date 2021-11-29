import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const clientCredentials = {
    apiKey: "AIzaSyBFEefCjZaVomY5LFPDLh--S22IWUkhIfQ",
    authDomain: "manageenicars-332913.firebaseapp.com",
    projectId: "manageenicars-332913",
    storageBucket: "manageenicars-332913.appspot.com",
    messagingSenderId: "676132858148",
    appId: "1:676132858148:web:001fadfc5c73ff1033abb1",
    measurementId: "G-EM5CMRCMK3"
};

export const google_provider = new firebase.auth.GoogleAuthProvider();
export const email_provider = new firebase.auth.EmailAuthProvider();

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(clientCredentials)
        console.log('Firebase was successfully init.')
    }
}