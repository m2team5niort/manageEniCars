import { google_provider } from "../firebase/initFirebase"
import firebase from "firebase/app"
var bcrypt = require('bcryptjs');

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

    async registerUserFirestore(user) {
        try {
            firebase
                .firestore()
                .collection('User')
                .doc(user.uid)
                .set({
                    email: user.email,
                    name: user.displayName,
                    password: await bcrypt.hash('testPassword', 12),
                    role: 'user'
                })
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * Déconnecte l'utilisateur du site
     */
    async signOut() {
        return firebase.auth().signOut()
    }

}

export default new UserService();