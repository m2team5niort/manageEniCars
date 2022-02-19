// Imports Used
import { google_provider } from "../firebase/initFirebase"
import firebase from "firebase/app"
var bcrypt = require('bcryptjs');

// UserService class
class UserService {

    /**
     * Connexion avec son compte google
     */
    async signInWithGoogle() {
        await firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        return await firebase.auth().signInWithPopup(google_provider)
    }

    /**
     * Connexion à l'aide d'un email et mot de passe
     * @param email email de connexion
     * @param password mot de passe de connexion
     */
    async signInWithEmailAndPassword(email, password) {
        return firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
    }

    /**
     * Inscription user firebase
     * @param email email du compte
     * @param password mot de passe du compte
     */
    async registerWithEmailAndPassword(email, password) {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((error) => error);
    }

    /**
     * Inscription user firestore avec Google
     * @param user Objet utilisateur
     */
    async registerUserFirestoreFromGoogle(user) {
        try {
            firebase
                .firestore()
                .collection('User')
                .doc(user.uid)
                .set({
                    email: user.email,
                    lastName: user.displayName.split(' ')[1],
                    firstName: user.displayName.split(' ')[0],
                    role: 'user',
                    provider: true,
                    profilPicture: ''
                })
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * Inscription user firestore avec Email/Password
     * @param user Objet utilisateur
     * @param password mot de passe du compte
     */
    async registerUserFirestoreFromEmail(user, password) {
        try {
            firebase
                .firestore()
                .collection('User')
                .doc(user.uid)
                .set({
                    email: user.email,
                    password: await bcrypt.hash(password, 12),
                    role: 'user',
                    provider: false,
                    profilPicture: ''
                })
        } catch (error) {
            console.log(error)
        }
    }

    async setUserFirestoreProfile(user) {
        try {
            firebase
                .firestore()
                .collection('User')
                .doc(user.id)
                .update({
                    role: 'user',
                    provider: false,
                    lastName: user.lastName,
                    firstName: user.firstName,
                    email: user.email,
                    address: user.address,
                    city: user.city,
                    country: user.country,
                    departement: user.departement,
                    zip: user.zip,
                    profilPicture: user.profilPicture
                })
        } catch (error) {
            console.log(error)
        }
    }

    async getUserFirestoreProfile(user) {
        let dataUser
        try {
            firebase
                .firestore()
                .collection('User')
                .doc(user.id)
                .onSnapshot(function (doc) {
                    dataUser = doc.data()
                })
        } catch (error) {
            console.log(error)
        }
        return dataUser
    }

    /**
     * Déconnecte l'utilisateur du site
     */
    async signOut() {
        return firebase.auth().signOut()
    }

}

export default new UserService();